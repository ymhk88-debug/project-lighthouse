const fallbackSiteUrl = "http://localhost:3000";

function withProtocol(url: string) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function normalizeSiteUrl(url: string) {
  return withProtocol(url.trim()).replace(/\/+$/, "");
}

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  fallbackSiteUrl;

export const siteUrl = normalizeSiteUrl(rawSiteUrl);

export const siteName = "유민환 변호사";

export const siteDescription =
  "창원에서 형사, 민사, 상속·가사, 행정 사건의 상담 안내와 업무 방식을 정리한 유민환 변호사 홈페이지입니다.";
