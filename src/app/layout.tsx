import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EagleX Nexus – Elite Cybersecurity & Tech Community",
  description:
    "EagleX Nexus is India's premier cybersecurity and technology community. Master ethical hacking, cloud security, AI, and advanced networking with elite instructors and a thriving community.",
  keywords: [
    "cybersecurity",
    "ethical hacking",
    "EagleX Nexus",
    "cloud security",
    "AI security",
    "network security",
    "penetration testing",
    "CTF",
    "tech community India",
  ],
  openGraph: {
    title: "EagleX Nexus – Elite Cybersecurity & Tech Community",
    description:
      "India's premier tech & cybersecurity community. Join 50,000+ professionals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EagleX Nexus",
    description: "Elite Cybersecurity & Tech Community",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
