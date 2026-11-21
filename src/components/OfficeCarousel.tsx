"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const slides = [
  {
    src: "/office/office-sign-1.jpg",
    alt: "사무소 입구 간판",
    fit: "contain",
  },
  {
    src: "/office/reception-desk-night.jpg",
    alt: "안내 데스크와 유리벽 너머 상담 테이블",
    fit: "cover",
  },
  {
    src: "/office/reception-desk.jpg",
    alt: "12층 안내 데스크와 뒤쪽 나무 벽",
    fit: "contain",
  },
  {
    src: "/office/office-plaque.jpg",
    alt: "사무소 금속 현판",
    fit: "contain",
  },
  {
    src: "/office/reception-blinds.jpg",
    alt: "블라인드가 쳐진 유리벽과 그 안의 상담 테이블",
    fit: "cover",
  },
  {
    src: "/office/office-meeting-room.jpg",
    alt: "유리벽 안의 상담 테이블과 창밖으로 보이는 산과 도시",
    fit: "cover",
  },
  {
    src: "/office/office-wood-table.jpg",
    alt: "상담실의 긴 나무 테이블과 검은 의자",
    fit: "contain",
  },
  {
    src: "/office/consult-room.jpg",
    alt: "창가에 놓인 상담 테이블과 의자",
    fit: "cover",
  },
  {
    src: "/office/office-window-view.jpg",
    alt: "상담실 창으로 보이는 용지호수와 산",
    fit: "cover",
  },
  {
    src: "/office/office-wide-window.jpg",
    alt: "넓은 창 밖으로 보이는 호수와 산",
    fit: "contain",
  },
  {
    src: "/office/office-lake-view.jpg",
    alt: "사무실에서 내려다본 용지호수와 주변 산",
    fit: "cover",
  },
  {
    src: "/office/office-view-2.jpg",
    alt: "창밖으로 보이는 호수, 인근 건물, 산",
    fit: "cover",
  },
  {
    src: "/office/certificate-shelf.jpg",
    alt: "흰 선반에 놓인 상장과 자격증",
    fit: "contain",
  },
] as const;

const arrowClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-lg text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function OfficeCarousel() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const count = slides.length;
  const upcoming = (index + 1) % count;

  function go(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="사무실 사진"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(index + 1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(index - 1);
        }
      }}
      className="flex h-full min-h-0 flex-1 flex-col outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div
        className="relative w-full overflow-hidden rounded-md border border-border bg-[#e7e1d6] touch-pan-y max-lg:aspect-[4/3] max-lg:max-h-[50vh] max-lg:flex-none lg:min-h-[420px] lg:flex-1"
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          if (event.target instanceof Element && event.target.closest("button")) return;
          startX.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => {
          if (startX.current == null) return;
          const delta = event.clientX - startX.current;
          startX.current = null;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
          if (delta > 48) go(index - 1);
          else if (delta < -48) go(index + 1);
        }}
        onPointerCancel={() => {
          startX.current = null;
        }}
      >
        {slides.map((item, itemIndex) => {
          const active = itemIndex === index;
          const next = itemIndex === upcoming;
          if (!active && !next) return null;
          return (
            <Image
              key={item.src}
              src={item.src}
              alt={active ? item.alt : ""}
              fill
              quality={90}
              sizes="(min-width: 1024px) 560px, 100vw"
              preload={next}
              loading={active ? "eager" : undefined}
              aria-hidden={!active}
              draggable={false}
              className={`office-slide ${item.fit === "contain" ? "object-contain" : "object-cover"} ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
          );
        })}
        <button
          type="button"
          className={`${arrowClass} absolute top-1/2 left-3 z-10 -translate-y-1/2`}
          aria-label="이전 사진"
          onClick={() => go(index - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className={`${arrowClass} absolute top-1/2 right-3 z-10 -translate-y-1/2`}
          aria-label="다음 사진"
          onClick={() => go(index + 1)}
        >
          ›
        </button>
      </div>
      <p className="mt-3 text-center text-sm font-semibold text-primary" aria-live="polite">
        {index + 1} / {count}
      </p>
    </div>
  );
}
