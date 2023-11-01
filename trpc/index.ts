import { protectedProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";
import { z } from "zod";
import Comments from "../components/anime/comments";

export const appRouter = router({
  authCallback: protectedProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;
    if (!userId) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });
    }

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
    if (!ctx.userId)
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });

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
          animeId: input.animeId,
        },
      });

      if (checkDuplicate) {
        return await db.favorite.deleteMany({
          where: {
            userId: ctx.userId,
            animeId: input.animeId,
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
    if (!ctx.userId)
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });

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
      if (!ctx.userId)
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });
      const { userId } = ctx;

      const checkDuplicate = await db.watchlist.findFirst({
        where: {
          userId,
          animeId: input.animeId,
        },
      });

      if (checkDuplicate) {
        return await db.watchlist.deleteMany({
          where: {
            userId: ctx.userId,
            animeId: input.animeId,
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
  getAllComments: protectedProcedure
    .input(
      z.object({
        episodeId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      if (!ctx.userId)
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });

      return await db.comment.findMany({
        where: {
          episodeId: input.episodeId,
        },
      });
    }),

  deleteComment: protectedProcedure
    .input(
      z.object({
        episodeId: z.string(),
        comment: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (!ctx.userId)
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });

      return await db.comment.deleteMany({
        where: {
          userId: ctx.userId,
          episodeId: input.episodeId,
          comment: input.comment,
        },
      });
    }),

  addComment: protectedProcedure
    .input(
      z.object({
        comment: z.string(),
        episodeId: z.string(),
        userId: z.string(),
        userImg: z.string(),
        userName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (!ctx.userId)
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });

      return await db.comment.create({
        data: {
          comment: input.comment,
          episodeId: input.episodeId,
          userImg: input.userImg,
          userName: input.userName,
          userId: input.userId,
        },
      });
    }),
});

export type AppRouter = typeof appRouter;
