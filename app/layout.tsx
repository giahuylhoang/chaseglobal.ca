import type { Metadata } from "next";
import "./globals.css";
import "./chatbot.css";
import ChatbotWidget from "@/components/shared/ChatbotWidget";

export const metadata: Metadata = {
  title: "Chase Global",
  description: "Unified education and immigration landing experience"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300..900;1,300..900&family=Red+Hat+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}
