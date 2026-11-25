import Link from "next/link";
import { QuickContact } from "@/components/QuickContact";

const officePhone = "055-263-5882";
const mobilePhone = "010-5948-5158";
const email = "ymhk88@gmail.com";

const navigation = [
  { label: "변호사 소개", href: "/profile" },
  { label: "처음 오신 분께", href: "/first-visit" },
  { label: "일하는 방식", href: "/working-style" },
  { label: "업무 분야", href: "/practice" },
  { label: "상담 안내", href: "/consultation" },
  { label: "법률 실무 노트", href: "/note" },
  { label: "오시는 길", href: "/location" },
  { label: "개인정보처리방침", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-primary pb-16 text-background md:pb-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:items-start md:justify-between md:py-12">
        <div className="max-w-2xl">
          <p className="text-lg font-semibold md:text-xl">유민환법률사무소</p>
          <p className="mt-2 text-sm leading-7 text-background/80">
            대표변호사·광고책임변호사 유민환
          </p>
          <address className="mt-5 space-y-1 not-italic text-sm leading-7 text-background/80">
            <p>경남 창원시 성산구 용지로169번길 7 한성빌딩 12층(용호동)</p>
            <p>
              사무실 <a href={`tel:${officePhone}`} className="underline-offset-4 hover:text-accent hover:underline">{officePhone}</a>
            </p>
            <p>
              휴대폰 <a href={`tel:${mobilePhone}`} className="underline-offset-4 hover:text-accent hover:underline">{mobilePhone}</a>
            </p>
            <p>
              이메일 <a href={`mailto:${email}`} className="underline-offset-4 hover:text-accent hover:underline">{email}</a>
            </p>
          </address>
          <div className="mt-5 space-y-1 text-sm leading-7 text-background/75">
            <p>상담료 10만원 · 예약제 · 평일 09:00~18:00</p>
            <p>주차: 상담 일정 조율 때 안내</p>
            <p>사업자등록번호 519-12-02825</p>
          </div>
        </div>
        <nav aria-label="하단 메뉴" className="flex flex-col text-sm text-background/85 md:items-end">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}
              className="inline-flex min-h-11 items-center whitespace-nowrap transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">
              {item.label}
            </Link>
          ))}
          <p className="pt-4 text-xs text-background/60">
            © 2026 유민환법률사무소. All rights reserved.
          </p>
        </nav>
      </div>
      <QuickContact />
    </footer>
  );
}
