import Link from "next/link";

const officePhone = "055-263-5882";
const mobilePhone = "050-5948-5158";

export function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-primary text-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between md:py-11">
        <div>
          <p className="text-base font-semibold md:text-xl">유민환 변호사</p>
          <p className="mt-2 text-sm text-background/70 md:text-base md:text-background/75">
            법률사무소 해결 변호사 유민환 법률사무소
          </p>
          <p className="mt-5 text-sm text-background/70 md:text-base md:text-background/80">
            주소: 창원시 성산구 용지로169번길 7, 12층
          </p>
          <p className="mt-1.5 text-sm text-background/70 md:text-base md:text-background/80">
            사무실{" "}
            <a
              href={`tel:${officePhone}`}
              className="transition-colors hover:text-accent"
            >
              {officePhone}
            </a>
          </p>
          <p className="mt-1.5 text-sm text-background/70 md:text-base md:text-background/80">
            휴대폰{" "}
            <a
              href={`tel:${mobilePhone}`}
              className="transition-colors hover:text-accent"
            >
              {mobilePhone}
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
          <Link href="/note" className="transition-colors hover:text-accent">
            법률 실무 노트
          </Link>
          <Link href="/location" className="transition-colors hover:text-accent">
            오시는 길
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-accent">
            개인정보처리방침
          </Link>
          <p className="pt-3 text-xs text-background/55 md:text-sm md:text-background/60">
            © 2026 유민환 변호사. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

