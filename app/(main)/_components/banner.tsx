import { IAnimeResult } from "@/types";
import Image from "next/image";

interface BannerProps {
  hasCover?: boolean;
  data: IAnimeResult | undefined;
}

export default function Banner({ hasCover, data }: BannerProps) {
  return (
    <div className="w-screen relative h-72">
      <>
        <Image
          src={data?.image!}
          height={500}
          width={500}
          quality={100}
          alt="Banner"
          className="z-10 aspect-video object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={data?.image!}
          fill
          alt="Banner"
          className="object-cover object-bottom"
          quality={1}
        />

        <div className="absolute bg-black/50 inset-0 backdrop-blur-sm" />
      </>
    </div>
  );
}
