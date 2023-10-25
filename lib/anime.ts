import { useQuery } from "@tanstack/react-query";
import { popular } from "./popular";
import { GetGenreType, GetGogoType, IAnimeResult } from "@/types";

const baseURL = "https://api.consumet.org";

interface useGetGenreProps {
  page?: number;
  genre: GetGenreType;
}

interface useGetGogoProps {
  page?: number;
  type: GetGogoType;
}

export const useGetGogo = ({
  page = 1,
  type = GetGogoType.RecentEpisodes,
}: useGetGogoProps) => {
  return useQuery([type, page], async () => {
    const res = await fetch(`${baseURL}/anime/gogoanime/${type}?page=${page}`);
    return res.json();
  });
};

export const useGetPopular = ({ page = 1 }: { page?: number }) => {
  return useQuery(["popular", page], () => {
    return popular;
  });
};

export const useGetGenre = ({
  page = 1,
  genre = GetGenreType.Action,
}: useGetGenreProps) => {
  return useQuery(
    [genre, page], // Include page and pageSize in the query key
    async () => {
      const url = `${baseURL}/meta/anilist/advanced-search?genres=["${genre}"]&page=${page}`;
      const res = await fetch(url);
      return res.json();
    }
  );
};

export const useGetAnimeInfo = (id: string) => {
  return useQuery<IAnimeResult>(
    ["info", id], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(`${baseURL}/anime/gogoanime/info/${id}`);
      return res.json();
    }
  );
};

export const useGetEpisode = (episodeId: string) => {
  return useQuery(
    ["watch", episodeId], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(`${baseURL}/anime/gogoanime/watch/${episodeId}`);
      return res.json();
    }
  );
};

export const useSearch = ({
  episodeId,
  page,
}: {
  episodeId: string;
  page?: number;
}) => {
  return useQuery(
    ["watch", episodeId], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `${baseURL}/anime/gogoanime/${episodeId}?page=${page}`
      );
      return res.json();
    }
  );
};
