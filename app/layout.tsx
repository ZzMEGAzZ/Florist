import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "@/redux/store-provider";
import Footertail from "@/components/objects/footer/FooterTail";
import FooterBody from "@/components/objects/footer/FooterBody";
import NavigationBar from "@/components/objects/header/navigation/NavigationBar";
import { headers } from 'next/headers';
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { dialogModalSelector } from "@/redux/modules/dialogModal/dialogModalSlice";
import Modal from "@/components/layouts/Modal";
import AlertDialogModal from "@/components/interactive/AlertDialog";

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
      <body className={`${kanit.className} w-full h-full`}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AlertDialogModal />

            <header>
              <NavigationBar />
            </header>


            <main className={`w-full h-full`}>
              <div className="h-full w-full">
                <div className="w-full h-full">{children}</div>
              </div>
            </main>


            <footer className="w-full h-full">         
                <FooterBody />
                <Footertail />
            </footer>



          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
