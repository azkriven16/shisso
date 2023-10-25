import { ITitle } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TextObject = {
  text: string | any;
};

export function getTitle({ text = "" }: TextObject) {
  if (typeof text === "string") {
    return text;
  } else {
    return text.userPreferred || text.romaji || "";
  }
}

export function cleanHtmlTags({ text = "" }: { text: string }) {
  return text.replace(/<[^>]*>/g, "");
}
