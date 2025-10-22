import type { Metadata } from "next";
import { Figtree } from 'next/font/google';
import "./globals.css";
import { MegaMenuProvider } from "./contexts/MegaMenuContext";
import MegaMenuOverlay from "./components/MegaMenuOverlay";
import ChatBot from "./components/ChatBot";
import { chatbotConfig } from "./config/chatbot";

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: "Expand Marketing",
  description: "Full-service digital marketing agency for home service businesses. SEO, PPC, web design, and AI optimization for remodeling contractors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className={`${figtree.className} antialiased tracking-tighter`} suppressHydrationWarning>
        <MegaMenuProvider>
          <MegaMenuOverlay />
          {children}
          <ChatBot
            apiKey={chatbotConfig.apiKey}
            systemInstructions={chatbotConfig.systemInstructions}
            welcomeMessage={chatbotConfig.welcomeMessage}
          />
        </MegaMenuProvider>
      </body>
    </html>
  );
}
