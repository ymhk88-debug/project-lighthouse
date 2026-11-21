import Link from "next/link";
import type { ReactNode } from "react";
import { KakaoRoughMap } from "@/components/KakaoRoughMap";
import { OfficeCarousel } from "@/components/OfficeCarousel";
import { address, email, mobilePhone, officePhone } from "@/lib/contact";

const kakaoMapUrl = "https://place.map.kakao.com/132675957";
const kakaoDirectionsUrl =
  "https://map.kakao.com/link/to/%EC%9C%A0%EB%AF%BC%ED%99%98%EB%B2%95%EB%A5%A0%EC%82%AC%EB%AC%B4%EC%86%8C,35.230304659342146,128.681311745033";

const visitChecklist = [
  {
    title: "상담 일정 조율",
    description:
      "방문 상담은 사전 일정 조율 후 진행됩니다. 방문 전 전화로 일정을 확인해 주세요.",
  },
  {
    title: "자료 준비",
    description:
      "계약서, 문자·카카오톡 대화, 입금 내역, 고소장, 소장, 통지서 등 사건과 관련된 자료를 함께 준비해 주세요.",
  },
  {
    title: "사건 흐름 정리",
    description:
      "언제, 누구와, 어떤 일이 있었는지 시간 순서로 정리해 오시면 상담을 더 정확하게 진행할 수 있습니다.",
  },
];

const seongsanLotteRoutes = "100, 152, 156, 212, 222, 223, 3000, 3004, 9000";
const seongsanEmartRoutes = "100, 152, 156, 212, 222, 223, 3000, 3004";

const cardClass =
  "rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-7 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]";

const primaryButtonClass =
  "inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-background transition-colors hover:bg-primary/90 md:h-12 md:bg-accent md:px-7 md:text-base md:text-primary md:shadow-[0_10px_24px_rgba(184,155,94,0.16)] md:hover:bg-accent/90";

const secondaryButtonClass =
  "inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-semibold text-primary transition-colors hover:border-accent md:h-12 md:border-accent/35 md:bg-background/95 md:px-7 md:text-base";

function Icon({ name }: { name: "pin" | "bus" | "car" | "parking" }) {
  const className = "h-5 w-5 shrink-0 text-accent";
  if (name === "pin") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === "bus") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="4" y="4" width="16" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 10h16M8 20v-3M16 20v-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="8" cy="14" r="0.8" fill="currentColor" />
        <circle cx="16" cy="14" r="0.8" fill="currentColor" />
      </svg>
    );
  }
  if (name === "car") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M4 15v2M20 15v2M5 15l1.4-4.2A2 2 0 0 1 8.3 9.4h7.4a2 2 0 0 1 1.9 1.4L19 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M4 15h16v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="7.5" cy="16.5" r="0.8" fill="currentColor" />
        <circle cx="16.5" cy="16.5" r="0.8" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 16V8h3.2a2.4 2.4 0 0 1 0 4.8H9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CardTitle({ icon, children }: { icon?: ReactNode; children: string }) {
  return (
    <h2 className="flex items-center gap-2 text-lg font-semibold text-primary md:text-2xl">
      {icon}
      {children}
    </h2>
  );
}

export default function LocationPage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">LOCATION</p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          오시는 길
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          방문 위치와 교통편, 상담 전 준비사항을 안내합니다.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
          <a href={kakaoDirectionsUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>
            길찾기
          </a>
          <a href="#visit-prep" className={secondaryButtonClass}>
            방문 전 안내
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-4">
        <article className={cardClass}>
          <div className="flex items-start gap-3">
            <span className="mt-1">
              <Icon name="pin" />
            </span>
            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-primary md:text-2xl">사무실 위치</h2>
              <p className="mt-3 text-base font-semibold leading-8 text-primary">{address}</p>
              <p className="mt-3 text-sm leading-7 text-primary/75 md:text-[15px]">
                대표번호{" "}
                <a href={`tel:${officePhone}`} className="font-semibold transition-colors hover:text-accent">
                  {officePhone}
                </a>
              </p>
              <p className="text-sm leading-7 text-primary/75 md:text-[15px]">
                휴대폰{" "}
                <a href={`tel:${mobilePhone}`} className="font-semibold transition-colors hover:text-accent">
                  {mobilePhone}
                </a>
              </p>
              <p className="text-sm leading-7 text-primary/75 md:text-[15px]">
                이메일{" "}
                <a href={`mailto:${email}`} className="font-semibold transition-colors hover:text-accent">
                  {email}
                </a>
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl text-sm leading-7 text-primary/70 md:text-[15px]">
              <p>
                방문 상담은 사전 일정 조율 후 진행됩니다. 법원이나 수사기관 기일, 외부 일정으로 자리를
                비울 수 있으므로 방문 전 전화로 일정을 확인해 주세요.
              </p>
              <p className="mt-2">
                서류를 가지고 오시는 경우, 받은 서류와 관련 자료를 가능한 범위에서 함께 준비해 오시면
                좋습니다. 방문 전 전화로 상담 일정과 준비자료를 함께 확인해 주세요.
              </p>
            </div>
            <a
              href={kakaoMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold text-primary underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
            >
              상세 정보
            </a>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="grid items-stretch gap-4 lg:grid-cols-2">
          <article className={`${cardClass} flex h-full min-w-0 flex-col`}>
            <CardTitle>지도 확인</CardTitle>
            <p className="mt-3 text-sm leading-7 text-primary/75 md:text-[15px]">{address}</p>
            <div className="mt-4 overflow-hidden rounded-md border border-border bg-background/60">
              <KakaoRoughMap />
            </div>
            <div className="mt-6 flex justify-center lg:mt-auto lg:pt-6">
              <a href={kakaoMapUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>
                카카오맵에서 보기
              </a>
            </div>
          </article>
          <article className={`${cardClass} flex h-full min-w-0 flex-col`}>
            <CardTitle>사무실 미리보기</CardTitle>
            <div className="mt-4 flex min-h-0 flex-1 flex-col">
              <OfficeCarousel />
            </div>
          </article>
        </div>
      </section>

      <section id="visit-prep" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-8 md:py-10">
        <h2 className="text-2xl font-semibold leading-tight text-primary md:text-4xl md:text-background">
          방문 전 확인하면 좋은 것
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {visitChecklist.map((item, index) => (
            <article key={item.title} className={cardClass}>
              <p className="text-xs font-semibold text-accent md:text-sm">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-primary md:text-2xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-primary/70 md:text-[15px]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <h2 className="text-2xl font-semibold leading-tight text-primary md:text-4xl md:text-background">
          교통 및 주차 안내
        </h2>
        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-2">
          <article className={`${cardClass} h-full min-w-0`}>
            <CardTitle icon={<Icon name="bus" />}>대중교통</CardTitle>
            <p className="mt-4 text-sm leading-7 text-primary/70 md:text-[15px]">
              유민환법률사무소는 용지호수, 성산아트홀, 정우상가 인근 한성빌딩 12층에 있습니다.
            </p>
            <h3 className="mt-6 text-base font-semibold text-primary md:text-lg">성산아트홀 정류소</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-primary/70 md:text-[15px]">
              <li>성산아트홀(롯데아파트 방면): {seongsanLotteRoutes}</li>
              <li>성산아트홀(이마트 방면): {seongsanEmartRoutes}</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-primary/70 md:text-[15px]">
              성산아트홀 정류소에서 한성빌딩까지는 직선거리 약 100m입니다.
            </p>
            <h3 className="mt-6 text-base font-semibold text-primary md:text-lg">정우상가·창원시청 정류소</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-primary/70 md:text-[15px]">
              <li>
                창원시청(정우상가), 창원시청 정류소에 시청 방면 다수 노선이 정차합니다. 한성빌딩까지
                직선거리 약 300m입니다.
              </li>
            </ul>
            <h3 className="mt-6 text-base font-semibold text-primary md:text-lg">용지호수</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-primary/70 md:text-[15px]">
              <li>사무소는 용지호수 바로 인근에 있습니다.</li>
            </ul>
            <p className="mt-6 text-sm leading-7 text-primary/70 md:text-[15px]">
              버스 노선은 바뀔 수 있으니 출발 전에{" "}
              <a
                href="https://bus.changwon.go.kr"
                className="font-semibold text-primary underline decoration-accent/45 underline-offset-4 transition-colors hover:text-accent"
              >
                창원버스정보시스템
              </a>
              에서 확인해 주세요.
            </p>
          </article>
          <div className="grid gap-4">
            <article className={cardClass}>
              <CardTitle icon={<Icon name="car" />}>자가용</CardTitle>
              <p className="mt-4 text-sm leading-7 text-primary/70 md:text-[15px]">
                방문 전 주소와 주차 가능 여부를 함께 확인해 주세요.
              </p>
            </article>
            <article className={cardClass}>
              <CardTitle icon={<Icon name="parking" />}>주차 안내</CardTitle>
              <p className="mt-4 text-sm leading-7 text-primary/70 md:text-[15px]">
                주차 가능 여부와 이용 방법은 상담 일정 조율 과정에서 함께 안내드립니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl rounded-lg border border-border bg-white/45 px-6 py-10 text-primary md:border-accent/35 md:bg-transparent md:px-10 md:py-12 md:text-background">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            방문 전 사건의 흐름을 정리해 주세요
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-primary/75 md:text-[17px] md:font-medium md:text-background/75">
            방문 전 상담 절차와 준비자료를 확인하시면 더 차분하게 상담을 준비할 수 있습니다.
          </p>
          <div className="mt-8">
            <Link href="/consultation" className={primaryButtonClass}>
              상담 안내 확인
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
