"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "처음 오셨나요", href: "/first-visit" },
  { label: "일하는 방식", href: "/working-style" },
  { label: "업무분야", href: "/practice" },
  { label: "법률 실무 노트", href: "/note" },
  { label: "FAQ", href: "/faq" },
  { label: "상담 안내", href: "/consultation" },
  { label: "오시는 길", href: "/location" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-accent/20 bg-primary/95 text-background backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap text-base font-bold text-background lg:text-lg"
        >
          유민환 변호사
        </Link>
        <nav className="hidden items-center gap-4 whitespace-nowrap text-sm font-medium text-background/85 xl:gap-6 xl:text-base lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-background/40 text-background lg:hidden"
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
        <nav className="border-t border-background/20 bg-primary px-6 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 text-sm font-medium text-background">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center whitespace-nowrap py-2 transition-colors hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

