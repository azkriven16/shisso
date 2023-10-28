import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-x-1 sm:gap-x-2">
      <Image
        src="/logo.svg"
        height="18"
        width="18"
        alt="Logo"
        className="dark:hidden mb-1"
      />
      <Image
        src="/logo-dark.svg"
        height="18"
        width="18"
        alt="Logo"
        className="hidden dark:block mb-1"
      />
      <p className="font-bold">{siteConfig.name}</p>
    </Link>
  );
};
