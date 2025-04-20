import type { Metadata } from "next";
import { _metadata } from "@/utils/_metadata-util";
import { roboto } from "@/utils/_fonts-util";

import "./globals.css";

export const metadata: Metadata = _metadata;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
