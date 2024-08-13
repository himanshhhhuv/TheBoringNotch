import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { SITE_CONFIG } from "@/config";



const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights as needed
});
export const metadata = SITE_CONFIG;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-black text-foreground antialiased max-w-full overflow-x-hidden",
          font.className
        )}>
        {children}
      </body>
    </html>
  );
}
