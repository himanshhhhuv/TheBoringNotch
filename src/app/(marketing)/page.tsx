"use client";
import { useEffect, useState } from "react";
import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/section-badge";
import { features } from "@/constants";
import { Heart } from "lucide-react";
import Iconn from "../../../public/icons/icon.png";

import Image from "next/image";
import Link from "next/link";

import type { Release, Asset } from "@/lib/types";

const HomePage = () => {
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
    <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
      {}
      <Wrapper>
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                <Image
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="w-4 h-4"
                />
                Introducing Boring Notch
              </span>
            </button>

            <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
              <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                Boring.Notch
              </h1>
              <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                Boring.Notch transforms your MacBook&apos;s notch into a dynamic
                music control center, complete with a visualizer and music
                controls, making it the star of your screen &amp; Yeah its Open
                Source
              </p>
              <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                <Link
                  href="/"
                  className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                  <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                    ✨ {"  "} Download Boring Notch and rock your MacBook’s
                    notch! 🎸
                  </p>
                  <Button
                    size="sm"
                    onClick={() =>
                      window.open(
                        latestRelease !== undefined
                          ? latestRelease.toString()
                          : "https://github.com/iamharshdev/TheBoringNotch/releases"
                      )
                    }
                    className="rounded-full hidden lg:flex border border-amber-500/20 hover:bg-red-800">
                    Download
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative flex items-center py-10 md:py-20 w-full">
              <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
              <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                <video
                  src="/assets/dashboard.mp4"
                  width={1200}
                  height={1200}
                  className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                  autoPlay
                  playsInline
                  muted
                />

                <BorderBeam size={400} duration={5} delay={100} />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-red-700 rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-amber-600 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Features" />
            <h2
              id="features-section"
              className="text-3xl lg:text-4xl font-semibold mt-6">
              Discover our powerful features
            </h2>
            <p className="text-muted-foreground mt-6">
              Boring Notch offers a range of boring features to help you have a
              boring experience
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex items-center justify-center mx-auto mt-8">
            <Icons.feature className="w-auto h-80" />
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start lg:items-start px-0 md:px-0">
                  <div className="flex items-center justify-center">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-red-700 rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-amber-600 rounded-full blur-[10rem] -z-10"></div>
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
          <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
          <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

          <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
            <div className="flex flex-col items-start justify-start md:max-w-[200px]">
              <div className="flex items-start">
                <Link href="/">
                  <Image src={Iconn} width={50} alt="BoringNotch" />
                </Link>
              </div>
              <p className="text-muted-foreground mt-4 text-sm text-start">
                Boring as an Aesthetic
              </p>
              <span className="mt-4 text-neutral-200 text-sm flex items-center">
                Made by Humans with
                <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
              </span>
            </div>

            <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="">
                  <h3 className="text-base font-medium text-white">Product</h3>
                  <ul className="mt-4 text-sm text-muted-foreground">
                    <li className="mt-2">
                      <Link
                        href="#features-section"
                        className="hover:text-foreground transition-all duration-300">
                        Features
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0 flex flex-col">
                  <h3 className="text-base font-medium text-white">
                    Integrations
                  </h3>
                  <ul className="mt-4 text-sm text-muted-foreground">
                    <li className="mt-2">
                      <Link
                        href="https://discord.com/invite/HznxBpnJmQ"
                        className="hover:text-foreground transition-all duration-300">
                        Discord
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href="https://x.com/theboringnotch"
                        className="hover:text-foreground transition-all duration-300">
                        X
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="">
                  <h3 className="text-base font-medium text-white">
                    Resources
                  </h3>
                  <ul className="mt-4 text-sm text-muted-foreground">
                    <li className="mt-2">
                      <Link
                        href="https://github.com/sponsors/iamharshdev"
                        className="hover:text-foreground transition-all duration-300">
                        Support Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
            <p className="text-sm text-muted-foreground mt-8 md:mt-0">
              &copy; {new Date().getFullYear()} Boring.Notch . All rights
              reserved.
            </p>
          </div>
        </footer>
      </Wrapper>
    </section>
  );
};

export default HomePage;
