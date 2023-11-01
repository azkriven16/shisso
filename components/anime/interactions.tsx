// @ts-nocheck
import { Button } from "../ui/button";
import { Bookmark, Heart, Loader2 } from "lucide-react";
import { trpc } from "@/app/_trpc/client";
import { IAnimeResult } from "@/types";
import { toast } from "sonner";
import { cn, getTitle } from "@/lib/utils";
import { useState } from "react";

interface InteractionsProps {
  anime: IAnimeResult | undefined;
}

export default function Interactions({ anime }: InteractionsProps) {
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [watchlistLoading, setWatchlistLoading] = useState(false);
  const utils = trpc.useContext();

  const { data: favorite } = trpc.getUserFavorite.useQuery();
  const { data: watchlist } = trpc.getUserWatchlist.useQuery();
  const isFavorite = favorite?.find((id) => id.animeId === anime.id);
  const isWatchList = watchlist?.find((id) => id.animeId === anime.id);

  const { mutate: addToFavorite } = trpc.addUserFavorite.useMutation({
    onSuccess: () => {
      utils.getUserFavorite.invalidate();
      isFavorite
        ? toast.error("Removed from favorites")
        : toast.success("Added to favorites");
    },
    onMutate: () => {
      utils.getUserFavorite.invalidate();
      toast.loading("Loading...");
      setFavoriteLoading(true);
    },
    onSettled: () => {
      utils.getUserFavorite.invalidate();
      toast.dismiss();
      setFavoriteLoading(false);
    },
    onError: (error) => {
      utils.getUserFavorite.invalidate();
      toast.error(`${error.message}`);
    },
  });

  const { mutate: addToWatchlist } = trpc.addUserWatchlist.useMutation({
    onSuccess: () => {
      utils.getUserWatchlist.invalidate();
      isWatchList
        ? toast.error("Removed from watchlist")
        : toast.success("Added to watchlist");
    },
    onMutate: () => {
      utils.getUserWatchlist.invalidate();
      toast.loading("Loading...");
      setWatchlistLoading(true);
    },
    onSettled: () => {
      utils.getUserWatchlist.invalidate();
      toast.dismiss();
      setWatchlistLoading(false);
    },
    onError: (error) => {
      utils.getUserWatchlist.invalidate();
      toast.error(`${error.message}`);
    },
  });

  return (
    <div className="flex-grow flex gap-3">
      <Button
        onClick={() =>
          addToFavorite({
            animeId: anime.id,
            id: anime.id,
            imgUrl: anime.image!,
            title: getTitle({ text: anime.title }),
          })
        }
        variant="outline"
        className="flex items-center gap-2"
      >
        {favoriteLoading ? (
          <Loader2 className="animate-spin transition-transform ease-in-out duration-500" />
        ) : (
          <Heart
            className={cn(
              "transition-transform ease-in-out duration-500",
              isFavorite && "fill-red-500 text-red-500"
            )}
          />
        )}
        Favorite
      </Button>
      <Button
        onClick={() =>
          addToWatchlist({
            animeId: anime.id,
            id: anime.id,
            imgUrl: anime.image!,
            title: getTitle({ text: anime.title }),
          })
        }
        variant="outline"
        className="flex items-center gap-2"
      >
        {watchlistLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <Bookmark
            className={cn("", isWatchList && "fill-yellow-500 text-yellow-500")}
          />
        )}
        Watchlist
      </Button>
    </div>
  );
}
