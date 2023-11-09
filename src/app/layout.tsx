import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import Layout from "./components/layout";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prince Nwakanma",
  description:
    "A full-stack developer portfolio built with Next.js and Nest.js",
  keywords:
    "web development, web design, react, javascript, nextjs, typescript, solidity, node.js, html, css, styled-components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#e3e2df"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#171716"
      />

      <body className={poppins.className} suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  );
}
