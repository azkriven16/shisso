import { Button } from "@/components/ui/button";

import MaxWidthWrapper from "./max-width-wrapper";
import { AiFillGithub } from "react-icons/ai";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background z-50">
      <MaxWidthWrapper className="space-y-5">
        <div className="md:ml-auto w-full justify-between flex items-center gap-x-2 text-muted-foreground">
          <Link href="/privacy-policy">
            <Button variant="outline" size="sm">
              Privacy Policy
            </Button>
          </Link>
          <Link href="/terms-condition">
            <Button variant="outline" size="sm">
              Terms & Conditions
            </Button>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-muted-foreground">
            Built by{" "}
            <span>
              <a
                className="text-foreground font-semibold hover:underline"
                href={siteConfig.links.github}
                target="_blank"
              >
                Euger.{" "}
              </a>
            </span>
            Illustrations from{" "}
            <span>
              <a
                className="text-foreground font-semibold hover:underline"
                href="https://notioly.com/"
                target="_blank"
              >
                Notioly.
              </a>
            </span>
          </div>
          <Button variant="ghost" size="icon" className="text-2xl">
            <a href={siteConfig.links.project} target="_blank">
              <AiFillGithub />
            </a>
          </Button>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
