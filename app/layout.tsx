import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryProvider } from "@/components/react-query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flow Pilot - Automation Services",
  description: "Flow Pilot helps small teams and solo founders eliminate busywork with fully managed automations — powered by Zapier, Make, AI agents, and custom-built systems.",
  icons: {
    icon: "/FlowPilotLogo.png",
  },
  openGraph: {
    url: "https://flow-pilot.awtomasyon.com/",
    type: "website",
    title: "Flow Pilot - Automation Services",
    description: "Flow Pilot helps small teams and solo founders eliminate busywork with fully managed automations — powered by Zapier, Make, AI agents, and custom-built systems.",
    images: [
      {
        url: "/FlowPilotLogo.png",
        width: 1200,
        height: 630,
        alt: "Flow Pilot - Automation Services",
      },
    ],
    siteName: "Flow Pilot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Pilot - Automation Services",
    description: "Flow Pilot helps small teams and solo founders eliminate busywork with fully managed automations — powered by Zapier, Make, AI agents, and custom-built systems.",
    images: ["/FlowPilotLogo.png"],
  },
  metadataBase: new URL("https://flow-pilot.awtomasyon.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('flow-pilot-theme') || 'system';
                  var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  document.documentElement.classList.toggle('dark', isDark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider defaultTheme="system" storageKey="flow-pilot-theme">
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
} 