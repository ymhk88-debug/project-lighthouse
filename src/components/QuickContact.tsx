import Link from "next/link";
const officePhone = "055-263-5882";

// 카카오톡 채널: 확인 필요. 채널 주소가 확인되기 전에는 버튼을 두지 않습니다.

export function QuickContact() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-3 py-2 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
          <a
            href={`tel:${officePhone}`}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-1 text-[12px] font-semibold text-primary transition-colors hover:bg-accent/90 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#816432] min-[390px]:text-sm"
          >
            전화 {officePhone}
          </a>
          <Link
            href="/consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary px-1 text-[12px] font-semibold text-primary transition-colors hover:bg-[#F0EBE2] focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#816432] min-[390px]:text-sm"
          >
            상담 안내
          </Link>
        </div>
      </div>
      <a
        href={`tel:${officePhone}`}
        className="fixed right-6 bottom-6 z-30 hidden min-h-12 items-center rounded-md bg-accent px-5 text-sm font-semibold text-primary shadow-[0_10px_24px_rgba(184,155,94,0.2)] transition-colors hover:bg-accent/90 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#816432] md:inline-flex"
      >
        전화 상담 {officePhone}
      </a>
    </>
  );
}
