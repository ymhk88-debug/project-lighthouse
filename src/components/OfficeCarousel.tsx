"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const slides = [
  {
    // 확인 필요: 12층 안내 데스크 안내 문구
    src: "/office/reception-desk.jpg",
    alt: "12층 안내 데스크와 뒤쪽 나무 벽",
    caption: "12층에 도착하시면 안내 데스크가 보입니다.",
  },
  {
    src: "/office/office-meeting-room.jpg",
    alt: "유리벽 안의 상담 테이블과 창밖으로 보이는 산과 도시",
    caption: "유리벽 안의 상담 테이블입니다. 창밖으로 산과 도시가 보입니다.",
  },
  {
    src: "/office/office-window-view.jpg",
    alt: "상담실 창으로 보이는 용지호수와 산",
    caption: "창 바로 앞에 용지호수가 있습니다.",
  },
  {
    src: "/office/office-lake-view.jpg",
    alt: "사무실에서 내려다본 용지호수와 주변 산",
    caption: "호수 건너 산이 이어집니다.",
  },
  {
    src: "/office/office-wood-table.jpg",
    alt: "상담실의 긴 나무 테이블과 검은 의자",
    caption: "상담 테이블은 긴 나무 상판입니다.",
  },
  {
    src: "/office/consult-room.jpg",
    alt: "창가에 놓인 상담 테이블과 의자",
    caption: "상담은 예약제로 이 방에서 진행됩니다.",
  },
];

const arrowClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-lg text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function OfficeCarousel() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const count = slides.length;
  const slide = slides[index];

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
          const upcoming = itemIndex === (index + 1) % count;
          return (
            <Image
              key={item.src}
              src={item.src}
              alt={active ? item.alt : ""}
              fill
              quality={90}
              sizes="(min-width: 1024px) 560px, 100vw"
              preload={active || upcoming}
              aria-hidden={!active}
              draggable={false}
              className={`office-slide object-cover transition-opacity duration-[250ms] ease-out ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
          );
        })}
        <button
          type="button"
          className={`${arrowClass} absolute top-1/2 left-3 -translate-y-1/2`}
          aria-label="이전 사진"
          onClick={() => go(index - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className={`${arrowClass} absolute top-1/2 right-3 -translate-y-1/2`}
          aria-label="다음 사진"
          onClick={() => go(index + 1)}
        >
          ›
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="사진 선택">
        {slides.map((item, itemIndex) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            aria-selected={itemIndex === index}
            aria-label={`${itemIndex + 1}번 사진, ${item.alt}`}
            className={`h-2.5 w-2.5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              itemIndex === index ? "bg-accent" : "bg-primary/25"
            }`}
            onClick={() => go(itemIndex)}
          />
        ))}
      </div>
      <p className="mt-3 min-h-14 text-sm leading-7 text-primary/75" aria-live="polite">
        {slide.caption}
      </p>
    </div>
  );
}
