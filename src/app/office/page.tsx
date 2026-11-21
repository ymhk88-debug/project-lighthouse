import Link from "next/link";
import type { Metadata } from "next";
import { OfficeCarousel } from "@/components/OfficeCarousel";

export const metadata: Metadata = {
  title: "사무실 안내",
  description: "창원 용지호수가 내려다보이는 12층 상담실과 안내 데스크를 보여 드립니다.",
};

export default function OfficePage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-20 md:pt-20 md:pb-24">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">사무실 안내</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          창원 용지호수가
          <br />
          내려다보이는 12층
        </h1>
        <div className="mt-8">
          <OfficeCarousel />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-8">
          <Link
            href="/location"
            className="text-sm font-semibold text-primary underline decoration-accent/50 underline-offset-4 md:text-background"
          >
            오시는 길
          </Link>
          <Link
            href="/consultation"
            className="text-sm font-semibold text-primary underline decoration-accent/50 underline-offset-4 md:text-background"
          >
            상담 예약 안내
          </Link>
        </div>
      </section>
    </div>
  );
}
