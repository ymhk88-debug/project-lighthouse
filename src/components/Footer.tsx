import Link from "next/link";
import {
  address,
  advertisingLawyer,
  businessRegistrationNumber,
  email,
  mobilePhone,
  officePhone,
  representativeLawyer,
} from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-primary text-background">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between md:py-11">
        <div>
          <p className="text-base font-semibold md:text-xl">유민환 변호사</p>
          <img
            src="/logo-wordmark-light.svg"
            alt="유민환법률사무소"
            className="mt-3 h-6 w-auto"
          />
          <p className="mt-5 text-sm text-background/70 md:text-base">
            대표변호사 {representativeLawyer}
          </p>
          <p className="mt-1.5 text-sm text-background/70 md:text-base">
            광고책임변호사 {advertisingLawyer}
          </p>
          <p className="mt-1.5 text-sm text-background/70 md:text-base">
            사업자등록번호 {businessRegistrationNumber}
          </p>
          <p className="mt-5 text-sm text-background/70 md:text-base">
            주소: {address}
          </p>
          <p className="mt-1.5 text-sm text-background/70 md:text-base">
            사무실{" "}
            <a
              href={`tel:${officePhone}`}
              className="transition-colors hover:text-accent"
            >
              {officePhone}
            </a>
          </p>
          <p className="mt-1.5 text-sm text-background/70 md:text-base">
            휴대폰{" "}
            <a
              href={`tel:${mobilePhone}`}
              className="transition-colors hover:text-accent"
            >
              {mobilePhone}
            </a>
          </p>
          <p className="mt-1.5 text-sm text-background/70 md:text-base">
            이메일{" "}
            <a href={`mailto:${email}`} className="transition-colors hover:text-accent">
              {email}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-background/80 md:items-end md:gap-2.5 md:text-base">
          <Link href="/first-visit" className="transition-colors hover:text-accent">
            처음 오신 분께
          </Link>
          <Link href="/working-style" className="transition-colors hover:text-accent">
            일하는 방식
          </Link>
          <Link href="/practice" className="transition-colors hover:text-accent">
            업무 분야
          </Link>
          <Link href="/consultation" className="transition-colors hover:text-accent">
            상담 안내
          </Link>
          <Link href="/cases" className="transition-colors hover:text-accent">
            해결사례
          </Link>
          <Link href="/note" className="transition-colors hover:text-accent">
            법률 실무 노트
          </Link>
          <Link href="/location" className="transition-colors hover:text-accent">
            오시는 길
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-accent">
            개인정보처리방침
          </Link>
          <p className="pt-3 text-xs text-background/55 md:text-sm">
            © 2026 유민환 변호사. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

