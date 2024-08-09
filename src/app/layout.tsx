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
    title: 'Isaac Foster - Full Stack Engineer',
    description: 'Motivated and hardworking with a passion for full stack web development.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased `}>
                <Theme panelBackground='solid' accentColor="sky" radius="small" className="relative">
                    {children}
                </Theme>
            </body>
        </html>
    )
}