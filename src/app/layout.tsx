import './globals.css'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes';
import { ReactNode } from "react";
import { Metadata } from 'next';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Thin Air - Radix / PandaCSS Starter',
    description: 'A simple Next.js starter with PandaCSS and Radix UI',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased `}>
                <Theme appearance='dark' panelBackground='solid' accentColor="sky" radius="small" className="relative">
                    {children}
                </Theme>
            </body>
        </html>
    )
}