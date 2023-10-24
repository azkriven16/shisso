import Image from "next/image";

interface BannerProps {
  hasCover: boolean;
}

export default function Banner({ hasCover }: BannerProps) {
  return (
    <div className="w-screen relative h-52">
      {hasCover ? (
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg"
          fill
          className="object-cover"
          alt="Banner Image"
        />
      ) : (
        <>
          <Image
            src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg"
            height={370}
            width={370}
            alt="Banner"
            className="z-10 aspect-video object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg"
            fill
            alt="Banner"
            className="object-cover object-bottom"
          />

          <div className="absolute bg-black/50 inset-0 backdrop-blur-sm" />
        </>
      )}
    </div>
  );
}
