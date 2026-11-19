import type { Metadata } from "next";
import { CaseBoard } from "@/components/CaseBoard";
import { exampleCases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "해결사례",
  description: "게시 전 검토용 예시 카드입니다. 실제 사건 경과가 아닙니다.",
};

export default function CasesPage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">해결사례</p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          예시로만 둔 카드입니다
        </h1>
        <div className="mt-8 max-w-3xl rounded-lg border border-[#e8ddcb] bg-white/70 p-6 text-sm leading-7 text-primary md:border-accent/25 md:bg-background/95 md:text-[15px] md:leading-8">
          <p>아래 카드는 화면 구성을 보기 위한 예시입니다. 실제 사례가 아닙니다.</p>
          <p className="mt-3">
            실제 사건을 올리려면 의뢰인의 서면 동의가 필요하고, 이름과 사건 내용을 알아볼 수 없게
            익명화합니다. 게시를 내려 달라는 요청이 있으면 3영업일 안에 삭제합니다.
          </p>
        </div>
        <div className="mt-10">
          <CaseBoard cases={exampleCases} />
        </div>
      </section>
    </div>
  );
}
