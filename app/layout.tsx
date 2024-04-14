import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "@/redux/store-provider";
import Footertail from "@/components/objects/footer/FooterTail";
import FooterBody from "@/components/objects/footer/FooterBody";
import NavigationBar from "@/components/objects/header/navigation/NavigationBar";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: "400"
});

export const metadata: Metadata = {
  title: 'Florist',
  description: 'Florist',
  icons: [
    {
      url: '/favicon.ico',
      href: '/favicon.ico',
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" sizes='any' />

        <title>Florist</title>
      </head>
      <body className={`${kanit.className} w-[100dvw] max-w-[100dvw] min-h-[100dvh] h-full`}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

              <header className="fixed z-[999] w-full min-h-[70px]">
                <NavigationBar />
              </header>

              <main className={`w-full pt-[70px] min-h-[100dvh] h-max`}>
                <div className="min-h-[100dvh] h-full w-full">
                  <div className="w-full min-h-[100dvh] h-full">{children}</div>
                </div>
              </main>

              <footer className="z-[999] w-full h-max bg-card border-t mt-20">
                <div className="w-full h-full px-16">
                  <FooterBody />
                  <div className="w-full h-0.5 bg-muted-foreground opacity-20"></div>
                  <Footertail />
                </div>
              </footer>


          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
