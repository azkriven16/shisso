import { protectedProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";
import { z } from "zod";

export const appRouter = router({
  authCallback: protectedProcedure.query(async ({ ctx }) => {
    const { userId, user } = ctx;
    if (!userId && )
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
        },
      });
    }

    return { success: true };
  }),
  getUserFavorite: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.userId) throw new TRPCError({ code: "UNAUTHORIZED" });

    return await db.favorite.findMany({
      where: {
        userId: ctx.userId,
      },
    });
  }),

  addUserFavorite: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        animeId: z.string(),
        imgUrl: z.string(),
        title: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const checkDuplicate = await db.favorite.findFirst({
        where: {
          userId,
        },
      });

      if (checkDuplicate) {
        return await db.favorite.deleteMany({
          where: {
            userId: ctx.userId,
          },
        });
      } else {
        return await db.favorite.create({
          data: {
            animeId: input.animeId,
            imgUrl: input.imgUrl,
            title: input.title,
            userId: ctx.userId,
          },
        });
      }
    }),

  getUserWatchlist: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.userId) throw new TRPCError({ code: "UNAUTHORIZED" });

    return await db.watchlist.findMany({
      where: {
        userId: ctx.userId,
      },
    });
  }),

  addUserWatchlist: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        animeId: z.string(),
        imgUrl: z.string(),
        title: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      const checkDuplicate = await db.watchlist.findFirst({
        where: {
          userId,
        },
      });

      if (checkDuplicate) {
        return await db.watchlist.deleteMany({
          where: {
            userId: ctx.userId,
          },
        });
      } else {
        return await db.watchlist.create({
          data: {
            animeId: input.animeId,
            imgUrl: input.imgUrl,
            title: input.title,
            userId: ctx.userId,
          },
        });
      }
    }),
});

export type AppRouter = typeof appRouter;
