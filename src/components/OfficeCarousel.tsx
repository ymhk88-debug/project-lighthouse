"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const photos = [
  { src: "/office/office-sign-1.jpg", alt: "사무실 입구 간판", fit: "contain" },
  { src: "/office/reception-desk-night.jpg", alt: "사무실 안내 데스크", fit: "cover" },
  { src: "/office/reception-desk.jpg", alt: "사무실 접수 공간", fit: "contain" },
  { src: "/office/office-plaque.jpg", alt: "사무실 현판", fit: "contain" },
  { src: "/office/reception-blinds.jpg", alt: "사무실 유리벽과 블라인드", fit: "cover" },
  { src: "/office/office-meeting-room.jpg", alt: "사무실 회의실", fit: "cover" },
  { src: "/office/office-wood-table.jpg", alt: "사무실 상담 테이블", fit: "contain" },
  { src: "/office/consult-room.jpg", alt: "사무실 상담실", fit: "contain" },
  { src: "/office/office-window-view.jpg", alt: "사무실 창밖 풍경", fit: "contain" },
  { src: "/office/office-wide-window.jpg", alt: "사무실 창가 전경", fit: "contain" },
  { src: "/office/office-lake-view.jpg", alt: "사무실에서 본 호수", fit: "cover" },
  { src: "/office/office-view-2.jpg", alt: "사무실 창밖 전망", fit: "cover" },
  { src: "/office/certificate-shelf.jpg", alt: "사무실 자격증 진열장", fit: "contain" },
] as const;

const controlClass =
  "h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background/20 bg-primary/90 text-2xl text-background shadow-sm transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function OfficeCarousel() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const move = useCallback((step: number) => {
    setIndex((current) => (current + step + photos.length) % photos.length);
  }, []);

  const photo = photos[index];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="사무실 사진 둘러보기"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
      className="min-w-0 outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div
        className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-lg border border-border bg-[#F0EBE2] sm:aspect-[16/10] lg:aspect-[16/9] touch-pan-y"
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchStartX.current;
          touchStartX.current = null;
          if (start === null) return;
          const end = event.changedTouches[0]?.clientX;
          if (end === undefined) return;
          const delta = end - start;
          if (delta > 48) move(-1);
          if (delta < -48) move(1);
        }}
        onTouchCancel={() => { touchStartX.current = null; }}
      >
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          unoptimized
          draggable={false}
          sizes="(min-width: 1200px) 1120px, (min-width: 768px) 90vw, 100vw"
          className={photo.fit === "contain" ? "object-contain" : "object-cover"}
        />
        <button
          type="button"
          aria-label="이전 사진"
          onClick={() => move(-1)}
          className={`${controlClass} absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 sm:inline-flex`}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          aria-label="다음 사진"
          onClick={() => move(1)}
          className={`${controlClass} absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 sm:inline-flex`}
        >
          <span aria-hidden="true">›</span>
        </button>
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-semibold tabular-nums text-background sm:bottom-5 sm:right-5"
        >
          {index + 1} / {photos.length}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-center gap-5 sm:hidden" role="group" aria-label="사무실 사진 이동">
        <button
          type="button"
          aria-label="이전 사진"
          onClick={() => move(-1)}
          className={`${controlClass} inline-flex`}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          aria-label="다음 사진"
          onClick={() => move(1)}
          className={`${controlClass} inline-flex`}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {photos.length}장 중 {index + 1}번째 사진: {photo.alt}
      </p>
    </div>
  );
}
