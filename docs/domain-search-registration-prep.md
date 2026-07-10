# Project Lighthouse Domain & Search Registration Prep

## 1. 현재 상태 요약

- 현재 임시 배포 주소: https://project-lighthouse-one.vercel.app
- GitHub 저장소: https://github.com/ymhk88-debug/project-lighthouse.git
- 배포 구조: `origin/main`에 push하면 Vercel Production 배포가 자동으로 진행되는 구조로 운영한다.
- 정식 도메인: 아직 연결하지 않았다.
- 현재 `robots.txt`와 `sitemap.xml`은 임시 배포 주소 또는 Vercel 환경값을 기준으로 생성된다.
- 정식 도메인 연결 후에는 Vercel 환경변수 `NEXT_PUBLIC_SITE_URL`을 정식 도메인 기준으로 변경하고 Redeploy를 진행한다.
- `src/lib/site.ts`에서 `NEXT_PUBLIC_SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL`, `VERCEL_URL` 순서로 사이트 URL을 정리한다.

## 2. 정식 도메인 후보 정리 기준

도메인 후보를 고를 때는 아래 기준을 함께 검토한다.

- 광고성 느낌이 강하지 않은지 확인한다.
- 변호사 개인 브랜드와 어울리는지 확인한다.
- 법률사무소명 또는 변호사명과 연결하기 쉬운지 확인한다.
- 기억하기 쉬운지 확인한다.
- 하이픈을 과도하게 쓰지 않는지 확인한다.
- 숫자나 의미 없는 문자를 피한다.
- 네이버 블로그, 명함, 상담 안내자료에 함께 쓰기 쉬운지 확인한다.

후보 유형은 아래처럼 나누어 검토할 수 있다.

- 변호사명 기반
- 법률 실무 노트 기반
- lighthouse 또는 등대 프로젝트 기반
- law office 기반
- 지역성을 약하게 반영하는 방식

검토용 후보 예시는 아래와 같다.

- `yminlaw.com`
- `yuminlaw.com`
- `minhanlaw.com`
- `lawofficeymh.com`
- `ymhlaw.com`
- `legalnote.kr`
- `lighthouse-law.com`
- `lighthouselegal.kr`
- `yuminlaw.kr`
- `ymhlaw.kr`

위 후보는 검토용 예시다. 실제 사용 가능 여부는 구매 시점에 도메인 구매처에서 다시 확인한다.

## 3. 도메인 구매처 검토 기준

구매처는 특정 업체로 고정하지 않고, 아래 기준으로 비교한다.

- DNS 설정을 직접 수정할 수 있는지 확인한다.
- Vercel 연결에 필요한 A record, CNAME 설정이 가능한지 확인한다.
- 최초 비용과 갱신 비용을 함께 확인한다.
- 한글 고객지원이 필요한지 검토한다.
- 결제 방식과 세금계산서 처리가 필요한지 확인한다.
- 도메인 잠금 기능과 개인정보 보호 옵션을 확인한다.

구매처 예시는 아래와 같다.

- Gabia
- Whois
- Hosting.kr
- Namecheap
- Cloudflare Registrar

구매처별 비용과 정책은 바뀔 수 있으므로 실제 구매 시점에 다시 확인한다.

## 4. 정식 도메인 연결 전 체크리스트

- [ ] `git status`가 clean인지 확인한다.
- [ ] 최신 커밋이 `origin/main`에 push 되었는지 확인한다.
- [ ] Vercel 최신 Production 배포가 정상인지 확인한다.
- [ ] `/` 페이지가 정상인지 확인한다.
- [ ] `/practice` 페이지가 정상인지 확인한다.
- [ ] `/practice/criminal` 페이지가 정상인지 확인한다.
- [ ] `/practice/civil` 페이지가 정상인지 확인한다.
- [ ] `/note` 페이지가 정상인지 확인한다.
- [ ] `/faq` 페이지가 정상인지 확인한다.
- [ ] `/consultation` 페이지가 정상인지 확인한다.
- [ ] `/first-visit` 페이지가 정상인지 확인한다.
- [ ] `/issues` 페이지가 정상인지 확인한다.
- [ ] `robots.txt` 응답을 확인한다.
- [ ] `sitemap.xml` 응답을 확인한다.
- [ ] Vercel 환경변수 `NEXT_PUBLIC_SITE_URL`의 현재 값을 확인한다.
- [ ] 정식 도메인 후보를 최종 선택한다.
- [ ] 도메인 구매를 완료한다.
- [ ] DNS 변경 전 현재 임시 배포 URL을 기록한다.

PowerShell 확인 예시:

```powershell
cd C:\Users\ro303\Documents\등대프로젝트\project-lighthouse
git status
git log --oneline -5
```

주요 페이지 열기:

```powershell
Start-Process "https://project-lighthouse-one.vercel.app"
```

주요 페이지 응답 확인:

```powershell
Invoke-WebRequest -Uri "https://project-lighthouse-one.vercel.app" -UseBasicParsing
Invoke-WebRequest -Uri "https://project-lighthouse-one.vercel.app/robots.txt" -UseBasicParsing
Invoke-WebRequest -Uri "https://project-lighthouse-one.vercel.app/sitemap.xml" -UseBasicParsing
```

## 5. Vercel 도메인 연결 절차

1. Vercel에 접속한다.
2. Project Lighthouse 프로젝트를 선택한다.
3. `Settings`로 이동한다.
4. `Domains`로 이동한다.
5. 선택한 정식 도메인을 입력한다.
6. `www` 포함 여부를 결정한다.
7. Vercel이 제시하는 DNS record를 확인한다.
8. 도메인 구매처의 DNS 관리 화면에서 Vercel 안내에 맞게 record를 설정한다.
9. Vercel에서 도메인 상태가 `Valid` 또는 `Configured`로 표시되는지 확인한다.
10. HTTPS 인증서 자동 발급을 기다린다.
11. 정식 도메인으로 접속해 홈페이지가 정상적으로 열리는지 확인한다.

Vercel이 안내하는 DNS record 값은 실제 연결 시점에 확인한다. 문서에 고정값을 임의로 기록하지 않는다.

## 6. `NEXT_PUBLIC_SITE_URL` 변경 절차

정식 도메인 연결 후 SEO 관련 URL이 정식 도메인을 기준으로 생성되도록 환경변수를 변경한다.

1. Vercel Project Settings로 이동한다.
2. `Environment Variables`로 이동한다.
3. `NEXT_PUBLIC_SITE_URL` 값을 확인한다.
4. 기존 값이 아래 값인지 확인한다.

```text
https://project-lighthouse-one.vercel.app
```

5. 새 값을 정식 도메인 기준으로 입력한다.

```text
https://선택한정식도메인
```

6. Production 환경에 반영되도록 설정한다.
7. 변경 후 Redeploy를 진행한다.
8. Redeploy 완료 후 정식 도메인 접속, `robots.txt`, `sitemap.xml`을 확인한다.

정식 도메인은 아직 정하지 않았으므로 위 새 값은 형식 예시로만 사용한다.

## 7. `robots.txt` / `sitemap.xml` 확인 절차

정식 도메인 연결 후 아래 URL을 확인한다.

- `https://정식도메인/robots.txt`
- `https://정식도메인/sitemap.xml`

확인할 내용은 아래와 같다.

- `robots.txt`의 `Host`가 정식 도메인인지 확인한다.
- `Sitemap` 주소가 정식 도메인 기준인지 확인한다.
- `sitemap.xml` 안의 URL들이 정식 도메인 기준인지 확인한다.
- 임시 Vercel 주소가 남아 있지 않은지 확인한다.

PowerShell 확인 예시:

```powershell
Invoke-WebRequest -Uri "https://정식도메인/robots.txt" -UseBasicParsing | Select-Object -ExpandProperty Content
Invoke-WebRequest -Uri "https://정식도메인/sitemap.xml" -UseBasicParsing | Select-Object -ExpandProperty Content
```

## 8. 네이버 서치어드바이저 등록 절차

1. 네이버 서치어드바이저에 접속한다.
2. 웹마스터 도구로 이동한다.
3. 사이트 등록을 선택한다.
4. 정식 도메인을 입력한다.
5. 소유확인 방식을 선택한다.
6. HTML 파일 업로드 방식과 meta tag 방식을 검토한다.
7. 현재 Next.js 구조에서 어떤 방식이 적절한지 별도 작업으로 확인한다.
8. 소유확인을 완료한다.
9. `sitemap.xml`을 제출한다.
10. `robots.txt` 수집 상태를 확인한다.
11. 주요 웹 페이지 수집 요청을 진행한다.

이번 문서 작업에서는 네이버 소유확인용 meta tag나 파일을 추가하지 않는다. 실제 등록 단계에서 소유확인 방식을 선택한 뒤 별도 작업지시서로 진행한다.

## 9. 구글 서치콘솔 등록 절차

1. Google Search Console에 접속한다.
2. 속성 추가를 선택한다.
3. 도메인 속성 또는 URL prefix 속성을 선택한다.
4. 정식 도메인을 입력한다.
5. 소유권 확인 방식을 선택한다.
6. DNS TXT 방식 또는 HTML tag 방식을 검토한다.
7. 소유확인을 완료한다.
8. `sitemap.xml`을 제출한다.
9. 주요 페이지 색인 생성 요청을 진행한다.

이번 문서 작업에서는 Google 소유확인용 tag나 DNS record를 추가하지 않는다. 실제 등록 시점에 별도 작업으로 처리한다.

## 10. 도메인 연결 후 점검 체크리스트

- [ ] 정식 도메인 `/` 접속을 확인한다.
- [ ] `/practice` 접속을 확인한다.
- [ ] `/practice/criminal` 접속을 확인한다.
- [ ] `/practice/civil` 접속을 확인한다.
- [ ] `/note` 접속을 확인한다.
- [ ] `/faq` 접속을 확인한다.
- [ ] `/consultation` 접속을 확인한다.
- [ ] `/first-visit` 접속을 확인한다.
- [ ] `/issues` 접속을 확인한다.
- [ ] `/privacy` 접속을 확인한다.
- [ ] `robots.txt` 내용을 확인한다.
- [ ] `sitemap.xml` 내용을 확인한다.
- [ ] 네이버 서치어드바이저 사이트 등록을 진행한다.
- [ ] 구글 서치콘솔 사이트 등록을 진행한다.
- [ ] 네이버 블로그 프로필 또는 소개글에 정식 홈페이지 링크를 반영할지 검토한다.
- [ ] 명함, 상담 안내자료, 블로그 하단 문구에 정식 홈페이지 링크를 반영할지 검토한다.

## 11. 되돌림 기준

- 도메인 연결 문제가 생겨도 임시 Vercel 주소는 계속 접속 가능한지 먼저 확인한다.
- `NEXT_PUBLIC_SITE_URL` 변경 후 문제가 있으면 Vercel 환경변수를 임시 배포 주소로 되돌리고 Redeploy를 진행한다.
- DNS 설정 문제가 있으면 도메인 구매처의 DNS record를 다시 확인한다.
- `robots.txt` 또는 `sitemap.xml`이 의도와 다르게 나오면 `src/lib/site.ts` 동작과 Vercel 환경변수를 확인한다.
- 소유확인 meta tag 또는 파일을 추가하는 별도 작업이 생기면 작업 전후 git commit을 분리한다.
- DNS 변경 전후의 설정값, 변경 시간, 확인 결과를 별도로 기록한다.

## 12. 향후 실제 실행 순서

1. 도메인 후보를 최종 선택한다.
2. 실제 가용 여부를 확인한다.
3. 도메인을 구매한다.
4. Vercel `Domains`에 도메인을 추가한다.
5. DNS record를 설정한다.
6. Vercel에서 도메인 연결 상태를 확인한다.
7. `NEXT_PUBLIC_SITE_URL`을 변경한다.
8. Redeploy를 진행한다.
9. 정식 도메인 접속을 확인한다.
10. `robots.txt`를 확인한다.
11. `sitemap.xml`을 확인한다.
12. 네이버 서치어드바이저 등록을 진행한다.
13. 구글 서치콘솔 등록을 진행한다.
14. 네이버 블로그와 기타 채널에 정식 홈페이지 링크를 반영할지 검토한다.
