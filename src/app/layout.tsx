import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
    themeColor: '#18181b', // zinc-900 
    width: 1280,           // 데스크탑 PC 너비에 맞춰 줌-아웃되도록 고정
};

export const metadata: Metadata = {
    title: '상품권 판매 안내 가이드',
    description: '디지털/지류 상품권 구매 및 판매 상담을 위한 전문 가이드 페이지입니다.',
    icons: {
        icon: '/icon.svg',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>
                <main className="min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}
