import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "../db";
import { z } from "zod";
import { auth } from "@clerk/nextjs";

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { userId, user } = auth();
    console.log(user);
    if (!userId || user?.emailAddresses)
      throw new TRPCError({ code: "UNAUTHORIZED" });

    // check if user is in db
    const dbUser = await db.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!dbUser) {
      // create user in db
      await db.user.create({
        data: {
          id: userId,
          email: `${user?.emailAddresses[0]}`,
        },
      });
    }

    return { success: true };
  }),
  getUserWatchlist: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    return await db.watchlist.findMany({
      where: {
        userId: userId,
      },
    });
  }),
  deleteWatchlist: privateProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = await db.watchlist.findFirst({
        where: {
          userId,
        },
      });

      if (!file) throw new TRPCError({ code: "NOT_FOUND" });

      await db.watchlist.delete({
        where: {
          id: input.id,
        },
      });

      return file;
    }),
  addWatchlist: privateProcedure
    .input(
      z.object({
        id: z.string(),
        imgUrl: z.string(),
        animeId: z.string(),
        title: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const file = await db.watchlist.findFirst({
        where: {
          userId,
          title: input.title,
        },
      });

      if (file) throw new TRPCError({ code: "NOT_FOUND" });

      return await db.watchlist.create({
        data: {
          animeId: input.id,
          imgUrl: input.imgUrl,
          title: input.title,
          userId: userId,
        },
      });
    }),
});

export type AppRouter = typeof appRouter;
