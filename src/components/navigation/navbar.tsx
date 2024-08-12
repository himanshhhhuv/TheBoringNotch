"use client";
import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Iconn from "../../../public/icons/icon.png";

const navbar = () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-amber-600/10 z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Iconn} width={40} alt="BoringNotch" />
            <span className="text-lg font-medium">Boring.Notch</span>
          </Link>
        </div>
        <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center justify-center gap-8">
            <a
              href="https://x.com/theboringnotch"
              className="hover:text-foreground/80 text-sm">
              Find us on X
            </a>
            <a
              href="https://discord.com/invite/HznxBpnJmQ"
              className="hover:text-foreground/80 text-sm">
              Join us on Discord
            </a>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/iamharshdev/TheBoringNotch"
            className="hover:text-foreground/80 text-sm">
            Github
          </a>
          <Button
            size="sm"
            onClick={() =>
              window.open(
                "https://github.com/iamharshdev/TheBoringNotch/releases"
              )
            }
            className="rounded-full hidden lg:flex border border-foreground/20 hover:bg-red-800">
            Download
          </Button>
        </div>
      </div>
    </header>
  );
};

export default navbar;
