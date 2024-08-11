import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    
    default: "Boring Notch - Not So Boring AfterAll",
    template: `%s | BoringNotch`,
  },
  description:
    "Boring Notch offers a range of boring features to help you have a boring experience!",

  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Boring Notch - Not So Boring AfterAll",
    description:
      "Boring Notch offers a range of boring features to help you have a boring experience!",
    images: [
      {
        url: "/assets/icon.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@himanshhhhuv",
    title: "Boring Notch - Not So Boring AfterAll",
    description:
      "Boring Notch offers a range of boring features to help you have a boring experience!",
    images: [
      {
        url: "/assets/icon.png",
      },
    ],
  },
  metadataBase: new URL("https://xyz.vercel.app"),
};
