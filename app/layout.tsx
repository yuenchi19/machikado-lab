import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "まちかど集客Lab | 地域密着型AI集客支援",
  description: "地方の中小店舗・介護施設向けにAIを活用した集客支援サービスを提供。MEO対策・SNS運用・Web集客をトータルサポートします。",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}