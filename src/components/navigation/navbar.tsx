import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import Iconn from "../../../public/icons/icon.png"


const navbar = () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Iconn} width={40}  alt='BoringNotch'/>
            <span className="text-lg font-medium">Boring.Notch</span>
          </Link>
        </div>
        <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center justify-center gap-8">
            <Link
              href="https://github.com/iamharshdev/TheBoringNotch/releases"
              className="hover:text-foreground/80 text-sm"
            >
              Download
            </Link>
            <Link
              href="https://github.com/iamharshdev/TheBoringNotch"
              className="hover:text-foreground/80 text-sm"
            >
              Github
            </Link>
            <Link
              href="https://x.com/theboringnotch"
              className="hover:text-foreground/80 text-sm"
            >
              Find us on X
            </Link>
            <Link href="#" className="hover:text-foreground/80 text-sm">
              Join us on Discord
            </Link>
          </ul>
        </nav>
        <div className="flex items-center gap-4"></div>
      </div>
    </header>
  );
}

export default navbar