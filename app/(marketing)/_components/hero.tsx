import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl pt-5">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image src="/boxes.png" fill className="object-contain" alt="Box" />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/surprise-box.png"
            fill
            className="object-contain"
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
};
