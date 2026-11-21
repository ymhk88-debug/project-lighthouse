"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navigation: NavItem[] = [
  { label: "변호사 소개", href: "/lawyer" },
  { label: "일하는 방식", href: "/working-style" },
  { label: "업무분야", href: "/practice" },
  { label: "해결사례", href: "/cases" },
  { label: "법률 실무 노트", href: "/note" },
  {
    label: "상담 안내",
    href: "/consultation",
    children: [
      { label: "자주 묻는 질문", href: "/faq" },
      { label: "처음 오신 분께", href: "/first-visit" },
    ],
  },
  { label: "오시는 길", href: "/location" },
];

const linkClass = "transition-colors hover:text-accent";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-accent/50 bg-white/95 text-primary backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1160px] items-center justify-between px-6">
        <Link href="/" aria-label="유민환법률사무소" className="inline-flex shrink-0 items-center">
          <img src="/logo-wordmark.svg" alt="유민환법률사무소" className="h-[26px] w-auto" />
        </Link>
        <nav className="hidden items-center gap-5 text-[15px] font-medium lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className={`${linkClass} inline-flex items-center gap-1`}>
                  {item.label}
                  <span aria-hidden="true" className="text-[10px] text-accent">
                    ▾
                  </span>
                </Link>
                <div className="invisible absolute top-full left-0 z-30 min-w-44 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-lg border border-accent/50 bg-white p-2 shadow-[0_12px_30px_rgba(17,31,50,0.08)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm hover:bg-background hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary text-primary lg:hidden"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>
      </div>
      {isOpen ? (
        <nav className="border-t border-accent/40 bg-white px-6 py-4 lg:hidden">
          <div className="mx-auto flex max-w-[1160px] flex-col gap-1 text-sm font-medium">
            {navigation.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="block py-2 hover:text-accent" onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mb-1 ml-4 flex flex-col border-l border-accent/50 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1.5 text-primary/80 hover:text-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
