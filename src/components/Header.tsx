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
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur md:border-accent/15 md:bg-primary/95">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-base font-bold text-primary md:text-lg md:text-background"
        >
          유민환 변호사
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-primary md:flex md:text-base md:text-background/85">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary md:hidden"
          aria-label="메뉴 열기"
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
        <nav className="border-t border-border px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-medium text-primary">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 transition-colors hover:text-accent"
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

