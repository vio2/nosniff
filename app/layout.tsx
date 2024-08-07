import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { Providers } from './providers';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={
                    inter.className +
                    ' flex flex-col min-h-screen min-w-screen items-center justify-center'
                }
            >
                <Providers>
                    <ThemeSwitcher />
                    <Header />
                    <div className="flex-grow">{children}</div>
                    <Footer />
                    <Script
                        src="https://telegram.org/js/telegram-web-app.js"
                        async
                        strategy="beforeInteractive"
                    />
                </Providers>
            </body>
        </html>
    );
}
