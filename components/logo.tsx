import Image from "next/image";
import { Poppins } from "next/font/google";

import Link from "next/link";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <Link
      href="/"
      className={cn("flex items-center mt-1 gap-2 font-semibold", font.style)}
    >
      <Image
        src="/logo.svg"
        height="18"
        width="18"
        alt="Logo"
        quality={100}
        className="border-b-2 rounded-lg p-0.5 border-black"
      />
      <div>
        <span>S</span>
        <span>h</span>
        <span>i</span>
        <span>s</span>
        <span>s</span>
        <span>o</span>
      </div>
    </Link>
  );
};
