import type { Metadata } from "next";
import Link from "next/link";
import { ProfileImage } from "@/components/ProfileImage";

export const metadata: Metadata = {
  title: "변호사 소개",
  description:
    "유민환 변호사의 사건을 대하는 기준과 상담·송무 업무 방식을 소개합니다.",
};

const principles = [
  {
    number: "01",
    title: "먼저 이야기를 듣습니다.",
    description:
      "현재 어떤 문제를 겪고 있고 무엇이 가장 걱정되는지부터 확인합니다. 사건에 관한 설명을 충분히 들은 뒤 자료를 함께 살펴봅니다.",
  },
  {
    number: "02",
    title: "사실과 자료를 구분해 정리합니다.",
    description:
      "기억에 따른 설명, 확인된 사실, 아직 확인되지 않은 부분을 나누어 봅니다. 법률적인 판단은 사건의 구체적인 경위와 자료를 바탕으로 검토합니다.",
  },
  {
    number: "03",
    title: "진행 과정을 살핍니다.",
    description:
      "서면 제출, 기일 준비, 추가 자료 확인처럼 사건을 진행하면서 필요한 업무를 점검합니다. 결과를 장담하기보다 매 단계의 판단 근거를 중요하게 생각합니다.",
  },
];

const areas = [
  { title: "형사", href: "/practice/criminal", desc: "수사와 재판, 피의자·피고인 및 피해자의 입장별 대응" },
  { title: "민사", href: "/practice/civil", desc: "대여금, 계약, 손해배상 등 청구와 방어의 쟁점" },
  { title: "상속·가사", href: "/practice/inheritance-family", desc: "상속재산과 가족관계, 재산분할·양육 문제" },
  { title: "행정", href: "/practice/administrative", desc: "처분서와 제출기한, 행정상 불복 절차" },
];

export default function ProfilePage() {
  return (
    <div className="bg-background">
      <div className="bg-primary">
        <section className="mx-auto grid w-full max-w-[1160px] gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-accent">
              ATTORNEY PROFILE
            </p>
            <h1 className="font-serif mt-5 text-3xl font-semibold leading-tight text-background sm:text-4xl md:text-6xl break-keep [overflow-wrap:anywhere]">
              유민환 변호사
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-background/80">
              의뢰인의 이야기를 충분히 듣고,
              <br />
              사건의 사실관계와 자료부터 살펴봅니다.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-background/75">
              결과를 장담하기보다 과정에 충실하겠습니다.
              상담부터 사건 진행까지, 필요한 판단을 차분히 정리하겠습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/working-style" className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90">
                일하는 방식 보기
              </Link>
              <Link href="/consultation" className="inline-flex min-h-12 items-center justify-center rounded-md border border-background/40 px-6 py-3 text-sm font-semibold text-background hover:border-accent hover:text-accent">
                상담 안내
              </Link>
            </div>
          </div>
          <div className="w-full max-w-sm lg:justify-self-center">
            <div className="overflow-hidden rounded-lg border border-accent/25 bg-background p-3 shadow-sm">
              <div className="relative w-full overflow-hidden rounded-md border border-border bg-[#F2EADC]" style={{ aspectRatio: "4 / 5" }}>
                <ProfileImage />
              </div>
              <div className="px-1 pt-4 pb-2">
                <p className="text-base font-semibold text-primary">유민환 변호사</p>
                <p className="mt-1 text-sm leading-7 text-[#625B52]">유민환법률사무소</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.16em] text-[#816432]">WORKING PRINCIPLES</p>
        <h2 className="font-serif mt-3 text-2xl font-semibold text-primary md:text-4xl break-keep [overflow-wrap:anywhere]">사건을 대하는 세 가지 기준</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.number} className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#816432]">{item.number}</p>
              <h3 className="mt-4 text-xl font-semibold leading-8 text-primary">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#625B52]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F0EBE2]">
        <div className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#816432]">PRACTICE AREAS</p>
          <h2 className="font-serif mt-3 text-2xl font-semibold text-primary md:text-4xl break-keep [overflow-wrap:anywhere]">주요 업무분야</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#625B52]">
            사건의 명칭보다 먼저 현재 단계와 확보된 자료를 확인합니다.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <Link key={area.href} href={area.href} className="group rounded-lg border border-border bg-white p-6 transition-colors hover:border-accent">
                <h3 className="text-xl font-semibold text-primary">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#625B52]">{area.desc}</p>
                <p className="mt-6 text-sm font-semibold text-[#816432] group-hover:underline">분야 살펴보기 →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto grid max-w-[1160px] gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-accent">BEFORE YOUR VISIT</p>
            <h2 className="font-serif mt-3 text-2xl font-semibold leading-tight text-background md:text-4xl break-keep [overflow-wrap:anywhere]">상담은 현재 상황을 정리하는 과정입니다.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-background/75">
              받은 서류, 정해진 기한, 현재 가지고 있는 자료부터 함께 확인합니다.
              모든 자료가 준비되지 않아도 상담 전 안내를 살펴보실 수 있습니다.
            </p>
          </div>
          <Link href="/first-visit" className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90">
            처음 오신 분께
          </Link>
        </div>
      </section>
    </div>
  );
}
