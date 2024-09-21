import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tabipa",
  description:
    "旅行のパフォーマンスを最大化し、心に残る最高の思い出作りを「タビパ」がサポートします。旅の隙間をオープンにし、最高の旅を実現しましょう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
