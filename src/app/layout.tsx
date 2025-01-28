import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { twMerge } from "tailwind-merge";
import Providers from "@/shared/providers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import usersApi from "@/api/users/server";
import { getQueryClient } from "@/shared/helpers";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StoneBlock Scanner",
  description: "Description",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await usersApi.getMe();

  const queryClient = getQueryClient();
  queryClient.setQueryData(["me"], user);

  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={twMerge(
          inter.className,
          "min-h-screen bg-primary flex flex-col",
        )}
      >
        <Providers>
          <HydrationBoundary state={dehydratedState}>
            <Header />
            {/** Empty container that pushes down content on mobile */}
            <div className="w-full h-20 lg:hidden"></div>
            <div className="flex-grow min-h-[900px]">{children}</div>
            <Footer />
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
