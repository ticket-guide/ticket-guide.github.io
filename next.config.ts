import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    // Github Pages 배포 시 CSS, JS 등 정적 파일 경로가 깨지는 현상 수정
    // (만약 저장소 이름이 계정명.github.io 처럼 루트 도메인을 쓰는 게 아니라면 아래 주석을 해제해야 할 수 있습니다.)
    // basePath: process.env.NODE_ENV === 'production' ? '/ticket-guide.github.io' : '',
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/ticket-guide.github.io/' : '',
};

export default nextConfig;
