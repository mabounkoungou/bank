import React from "react";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "NextB",
  description: "NextB is a modern banking platform",
  icons: {
    icon: "/icons/logo.svg",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    
      <html lang="en" suppressHydrationWarning>
       
        <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
      
          {children}
        </body>
      </html>
    
  );
};

export default RootLayout;
