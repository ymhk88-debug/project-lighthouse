import Link from "next/link";
import { officePhone } from "@/lib/contact";

// 카카오톡 채널: 확인 필요. 채널 주소가 확인되기 전에는 버튼을 두지 않습니다.

export function QuickContact() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-3 py-2 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
          <a
            href={`tel:${officePhone}`}
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent text-sm font-semibold text-primary"
          >
            전화 {officePhone}
          </a>
          <Link
            href="/consultation"
            className="inline-flex h-11 items-center justify-center rounded-md border border-primary text-sm font-semibold text-primary"
          >
            상담 안내
          </Link>
        </div>
      </div>
      <a
        href={`tel:${officePhone}`}
        className="fixed right-6 bottom-6 z-30 hidden h-12 items-center rounded-md bg-accent px-5 text-sm font-semibold text-primary shadow-[0_10px_24px_rgba(184,155,94,0.2)] md:inline-flex"
      >
        전화 상담 {officePhone}
      </a>
    </>
  );
}
