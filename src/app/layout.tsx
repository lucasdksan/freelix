import type { Metadata } from "next";
import { _metadata } from "@/frontend/utils/_metadata-util";
import { roboto } from "@/frontend/utils/_fonts-util";
import { ModalProvider } from "@/frontend/contexts/modal-contex";

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
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}