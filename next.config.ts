import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //그 폴더만 사용 -> standalone 파일 생성됌
  output: 'standalone',
};

export default nextConfig;
