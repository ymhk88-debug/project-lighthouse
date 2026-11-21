import Link from "next/link";
import type { Metadata } from "next";
import { OfficePhoto } from "@/components/OfficePhoto";

export const metadata: Metadata = {
  title: "사무실 안내",
  description: "창원 용지호수가 내려다보이는 12층 상담실과 안내 데스크를 보여 드립니다.",
};

const captionClass = "mt-3 max-w-md text-sm leading-7 text-primary md:text-[15px] md:text-background/80";

export default function OfficePage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-6xl px-6 pt-16 md:pt-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">사무실 안내</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          창원 용지호수가
          <br />
          내려다보이는 12층
        </h1>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
        <OfficePhoto
          src="/office/office-meeting-room.jpg"
          alt="유리벽 안의 상담 테이블과 창밖으로 보이는 산과 도시"
          ratio="2000 / 1559"
          sizes="(min-width: 1024px) 1080px, 100vw"
        />
        <p className={captionClass}>유리벽 안의 상담 테이블입니다. 창밖으로 산과 도시가 보입니다.</p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-6 md:py-10">
        <div className="ml-auto w-full md:w-[74%]">
          <OfficePhoto
            src="/office/office-window-view.jpg"
            alt="상담실 창으로 보이는 용지호수와 산"
            ratio="2000 / 1957"
            sizes="(min-width: 1024px) 820px, 100vw"
          />
          <p className={`${captionClass} md:ml-auto md:text-right`}>창 바로 앞에 용지호수가 있습니다.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-6 md:py-10">
        <div className="w-full md:w-[52%]">
          <OfficePhoto
            src="/office/office-lake-view.jpg"
            alt="사무실에서 내려다본 용지호수와 주변 산"
            ratio="2000 / 1500"
            sizes="(min-width: 1024px) 560px, 100vw"
          />
          <p className={captionClass}>호수 건너 산이 이어집니다.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-6 md:py-10">
        <div className="ml-auto w-full md:w-[64%]">
          <OfficePhoto
            src="/office/office-wood-table.jpg"
            alt="상담실의 긴 나무 테이블과 검은 의자"
            ratio="1669 / 2000"
            sizes="(min-width: 1024px) 700px, 100vw"
          />
          <p className={captionClass}>상담 테이블은 긴 나무 상판입니다.</p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl items-end gap-6 px-6 py-10 md:py-16 lg:grid-cols-[1.35fr_0.65fr]">
        <OfficePhoto
          src="/office/consult-room.jpg"
          alt="창가에 놓인 상담 테이블과 의자"
          ratio="2000 / 1893"
          sizes="(min-width: 1024px) 760px, 100vw"
        />
        <div className="lg:pb-2">
          <h2 className="text-2xl font-semibold text-primary md:text-background md:text-3xl">상담실</h2>
          <p className="mt-4 text-base leading-8 text-muted md:text-[17px] md:text-background/80">
            상담은 예약제로 이 방에서 진행됩니다.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 py-10 md:py-16 lg:grid-cols-[0.7fr_1.1fr]">
        <div>
          {/* 확인 필요: 12층 안내 데스크 안내 문구 */}
          <h2 className="text-2xl font-semibold text-primary md:text-background md:text-3xl">안내 데스크</h2>
          <p className="mt-4 text-base leading-8 text-muted md:text-[17px] md:text-background/80">
            12층에 도착하시면 안내 데스크가 보입니다.
          </p>
          <Link
            href="/location"
            className="mt-6 inline-flex text-sm font-semibold text-primary underline decoration-accent/50 underline-offset-4 md:text-background"
          >
            오시는 길
          </Link>
        </div>
        <OfficePhoto
          src="/office/reception-desk.jpg"
          alt="12층 안내 데스크와 뒤쪽 나무 벽"
          ratio="1717 / 2000"
          sizes="(min-width: 1024px) 680px, 100vw"
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pt-4 pb-20 md:pb-24">
        <Link
          href="/consultation"
          className="text-base font-semibold text-primary underline decoration-accent/50 underline-offset-4 md:text-lg md:text-background"
        >
          상담 예약 안내
        </Link>
      </section>
    </div>
  );
}
