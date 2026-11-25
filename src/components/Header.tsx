"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className={`sticky top-0 ${isOpen ? "z-40" : "z-20"} border-b border-accent/20 bg-primary/95 text-background backdrop-blur`}>
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="유민환법률사무소" className="inline-flex min-w-0 shrink-0 items-center focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          <img src="/logo-wordmark-light.svg" alt="유민환법률사무소" className="h-[26px] w-auto max-w-[calc(100vw-7.5rem)]" />
        </Link>
        <nav className="hidden items-center gap-4 whitespace-nowrap text-sm font-medium text-background/85 xl:gap-6 xl:text-base xl:flex">
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
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-background/40 text-background xl:hidden"
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
        <nav className="border-t border-background/20 bg-primary px-6 py-4 xl:hidden">
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

