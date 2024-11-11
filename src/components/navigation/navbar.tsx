"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { XLogo, DiscordLogo, GithubLogo, Heart } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Iconn from "../../../public/icons/icon.png";

import type { Release, Asset } from "@/lib/types";

const navbar = () => {
  const [latestRelease, setLatestRelease] = useState<String | undefined>(
    undefined
  );

  let endpoint =
    "https://api.github.com/repos/TheBoredTeam/boring.notch/releases/latest";

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data: Release) => {
        data.assets.forEach((asset: Asset) => {
          if (asset.browser_download_url !== null) {
            setLatestRelease(asset.browser_download_url);
          }
        });
      });
  }, []);
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
              <XLogo size={28} weight="light" />
            </a>
            <a
              href="https://github.com/sponsors/iamharshdev"
              className="hover:text-foreground/80 text-sm">
              <Heart size={28} weight="light" />
            </a>
            <a
              href="https://discord.com/invite/HznxBpnJmQ"
              className="hover:text-foreground/80 text-sm">
              <DiscordLogo size={28} weight="light" />
            </a>
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/iamharshdev/TheBoringNotch"
            className="hover:text-foreground/80 text-sm">
            <GithubLogo size={32} weight="light" />
          </a>
          <Button
            size="sm"
            onClick={() =>
              window.open(
                latestRelease !== undefined
                  ? latestRelease.toString()
                  : "https://github.com/iamharshdev/TheBoringNotch/releases"
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
