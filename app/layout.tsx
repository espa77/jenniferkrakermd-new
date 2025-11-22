import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Jennifer Kraker, MD | Precision Psychiatry",
    description: "Unlock your genetic potential with personalized, comprehensive health insights and integrative psychiatry.",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-[#Fdfdfd] text-[#111] antialiased selection:bg-black selection:text-white">
                {children}
            </body>
        </html>
    );
}