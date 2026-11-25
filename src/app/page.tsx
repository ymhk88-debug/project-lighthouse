import Link from "next/link";
import { ProfileImage } from "@/components/ProfileImage";
import { HomeProcessTimeline } from "@/components/HomeProcessTimeline";

const trustItems = [
  "의뢰인의 이야기를 충분히 듣겠습니다.",
  "사건을 방치하지 않겠습니다.",
  "억울함이 남지 않도록 끝까지 살펴보겠습니다.",
];

const situationCards = [
  {
    href: "/practice/civil",
    label: "민사",
    title: "차용증이 없는 돈 문제",
    description: "계좌이체 내역, 문자, 일부 변제 내역을 함께 보며 돈의 성격과 반환 약속을 확인합니다.",
  },
  {
    href: "/practice/civil",
    label: "민사",
    title: "소장이나 지급명령을 받은 상황",
    description: "청구취지, 답변서 기한, 인정할 부분과 다툴 부분을 나누어 대응 방향을 정리합니다.",
  },
  {
    href: "/practice/criminal",
    label: "형사",
    title: "경찰에서 연락을 받은 상황",
    description: "사건명, 출석 요구, 조사 전 확인할 자료를 먼저 정리하고 진술 방향을 검토합니다.",
  },
  {
    href: "/practice/civil",
    label: "계약분쟁",
    title: "계약서가 없는 거래",
    description: "송금 내역, 견적서, 세금계산서, 대화 내용을 함께 확인해 거래 경위를 정리합니다.",
  },
  {
    href: "/practice/inheritance-family",
    label: "상속·가사",
    title: "가족 간 상속 문제가 생긴 경우",
    description: "가족관계, 재산 목록, 기존 협의 내용, 대화 자료를 나누어 쟁점을 확인합니다.",
  },
  {
    href: "/issues",
    label: "내용증명",
    title: "내용증명을 보내기 전",
    description: "표현, 청구 내용, 기한, 추후 소송 가능성을 함께 검토해 불필요한 분쟁 확대를 줄입니다.",
  },
];

const practiceAreas = [
  { title: "형사", href: "/practice/criminal", description: "피의자·피고인 방어와 피해자 권리 보호" },
  { title: "민사", href: "/practice/civil", description: "대여금·계약·손해배상·집행" },
  { title: "상속·가사", href: "/practice/inheritance-family", description: "상속재산·이혼·재산분할·양육" },
  { title: "행정", href: "/practice/administrative", description: "처분 전 소명과 불복 절차" },
];

const processSteps = [
  "상담",
  "사실관계 정리",
  "자료 검토",
  "쟁점 분석",
  "대응 방향 제시",
  "사건 진행",
];

const faqItems = [
  { question: "상담 전에 어떤 자료를 준비해야 하나요?", answer: "받은 서류, 정해진 기한, 대화 내역 등 현재 가지고 있는 자료부터 준비하시면 됩니다." },
  { question: "전화나 메시지로 먼저 문의할 수 있나요?", answer: "사전 연락으로 상담 일정을 조율할 수 있습니다. 방문 상담은 예약제로 진행합니다." },
  { question: "사건 진행 방향은 언제 알 수 있나요?", answer: "상담에서 사실관계와 자료를 확인한 후 가능한 대응 방향을 함께 검토합니다." },
  { question: "상담료와 상담 시간은 어떻게 되나요?", answer: "상담료는 10만원이며, 평일 09:00~18:00 예약제로 운영합니다." },
];

const noteCards = [
  {
    label: "형사 초기대응",
    title: "경찰서 연락을 받았을 때 바로 출석해도 될까",
    description: "조사 전 확인할 자료와 출석 전 정리해야 할 내용을 먼저 살펴봅니다.",
    href: "https://blog.naver.com/lawoffice_mh/224312825362",
  },
  {
    label: "민사소송",
    title: "소장을 받았을 때 바로 답변서를 준비해야 하는 이유",
    description: "답변서 제출기한, 청구취지, 인정할 부분과 다툴 부분을 나누어 정리합니다.",
    href: "https://blog.naver.com/lawoffice_mh/224324287188",
  },
  {
    label: "대여금·미수금",
    title: "차용증이 없을 때 돈을 받을 수 있을까",
    description: "계좌이체 내역, 문자, 카카오톡, 일부 변제 내역을 중심으로 입증 방향을 확인합니다.",
    href: "https://blog.naver.com/lawoffice_mh/224325644574",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={`text-sm font-semibold tracking-[0.16em] ${tone === "dark" ? "text-accent" : "text-[#816432]"}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`mt-3 whitespace-pre-line font-serif text-2xl font-semibold leading-tight md:text-4xl ${tone === "dark" ? "text-background" : "text-primary"} break-keep [overflow-wrap:anywhere]`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 whitespace-pre-line text-base leading-8 md:text-[17px] ${tone === "dark" ? "text-background/75" : "text-[#625B52]"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function TextLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-accent text-primary hover:bg-accent/90 md:bg-accent md:text-primary md:shadow-[0_10px_24px_rgba(184,155,94,0.16)] md:hover:bg-accent/90"
      : "border border-border bg-background text-primary hover:border-accent md:border-accent/35 md:bg-background/95";

  return (
    <Link
      href={href}
      className={`inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition-colors md:h-12 md:px-7 md:text-base ${className}`}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="bg-background md:bg-background">
      <div className="bg-primary">
      <section className="mx-auto grid w-full max-w-[1160px] gap-12 px-6 py-18 md:py-24 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">
            유민환 변호사 법률 플랫폼
          </p>
          <h1 className="mt-5 max-w-2xl break-keep font-serif text-3xl font-semibold leading-tight text-background sm:text-4xl md:text-5xl lg:text-6xl">
            법률 문제는
            <br />
            결과만큼 과정도 중요합니다.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-background/75 md:text-xl md:font-medium">
            지금 무엇을 해야 하는지부터
            <br />
            차분히 함께 정리해보겠습니다.
          </p>
          <p className="mt-5 max-w-xl leading-7 text-background/80 md:text-[17px] md:leading-8">
            의뢰인의 이야기를 충분히 듣고,
            <br />
            가능한 해결 방향을 함께 찾겠습니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
            <a
              href="tel:055-263-5882"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-primary transition-colors hover:bg-accent/90 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:min-h-12 md:px-7 md:text-base"
            >
              전화 상담 055-263-5882
            </a>
            <TextLink href="/consultation">상담 안내 보기</TextLink>
            <TextLink href="/first-visit" variant="secondary">
              처음 오셨나요?
            </TextLink>
          </div>
        </div>

        <div
          className="w-full max-w-sm lg:justify-self-center"
          style={{ width: "100%", maxWidth: "380px" }}
        >
          <div className="w-full overflow-hidden rounded-lg border border-[#e8ddcb] bg-background p-3 shadow-[0_12px_30px_rgba(15,29,46,0.08)] md:border-accent/25 md:bg-background/95 md:shadow-[0_22px_50px_rgba(0,0,0,0.16)]">
            <div
              className="relative w-full overflow-hidden rounded-md border border-[#e7dcc8] bg-[#f2eadc] md:border-accent/20"
              style={{
                aspectRatio: "4 / 5",
                maxWidth: "378px",
                overflow: "hidden",
                position: "relative",
                width: "100%",
              }}
            >
              <ProfileImage />
            </div>
            <div className="px-1 pt-4 pb-2">
              <p className="text-sm font-semibold text-primary md:text-lg">유민환 변호사</p>
              <p className="mt-2 text-sm leading-6 text-[#625B52] md:text-[15px] md:leading-7">
                결과를 장담하기보다,
                <br />
                과정에 충실하겠습니다.
              </p>
              <Link
                href="/profile"
                className="mt-4 inline-flex text-sm font-semibold text-[#816432] underline decoration-accent/50 underline-offset-4 transition-colors hover:text-primary"
              >
                변호사 소개 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className="border-y border-accent/15 bg-[#17283D]">
        <div className="mx-auto grid max-w-[1160px] gap-4 px-6 py-6 md:grid-cols-3">
          {trustItems.map((item) => (
            <p key={item} className="text-sm font-medium leading-6 text-background/85">
              <span className="mr-2 text-accent">✓</span>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="situations" className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
        <SectionHeading title="지금 어떤 상황이신가요?" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {situationCards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex min-h-48 flex-col rounded-lg border border-border bg-white p-6 transition-colors hover:border-accent"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-[#816432]">{item.label}</p>
              <h3 className="mt-3 text-lg font-semibold leading-7 text-primary break-keep [overflow-wrap:anywhere]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#625B52]">{item.description}</p>
              <p className="mt-auto pt-5 text-sm font-semibold text-[#816432] group-hover:underline">관련 안내 보기 →</p>
            </Link>
          ))}
        </div>
        <div className="mt-7">
          <TextLink href="/issues" variant="secondary">상황별 쟁점 더 보기</TextLink>
        </div>
      </section>



      <section className="border-y border-border bg-[#F0EBE2]">
        <div className="mx-auto grid max-w-[1160px] gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-20">
          <SectionHeading
            eyebrow="처음 오신 분께"
            title="막막한 상황을 먼저 정리하는 곳입니다."
            description="문제가 시작된 시점, 받은 연락과 서류, 지금 가지고 있는 자료부터 확인합니다. 자료를 모두 준비하지 못해도 상담은 가능합니다."
          />
          <TextLink href="/first-visit" variant="secondary">첫 방문 준비 안내 보기</TextLink>
        </div>
      </section>

      <div className="bg-primary">
      <section className="mx-auto grid max-w-[1160px] gap-8 px-6 py-16 md:py-20 md:grid-cols-[1fr_auto] md:items-end">
        <SectionHeading
          eyebrow="일하는 방식"
          tone="dark"
          title={"결과를 장담하지 않습니다.\n과정을 끝까지 살피겠습니다."}
          description={
            "상담에서는 먼저 이야기를 듣습니다.\n사건에서는 자료와 사실관계를 확인합니다.\n결과는 장담할 수 없지만,\n과정에 충실하겠다는 약속은 드릴 수 있습니다."
          }
        />
        <TextLink href="/working-style" variant="secondary">
          일하는 방식 보기
        </TextLink>
      </section>
      </div>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-background">
        <div className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#816432]">PRACTICE</p>
          <div className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-6 h-0.5 w-8 shrink-0 bg-accent" />
            <SectionHeading title="주요 업무분야" />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area, index) => (
              <Link
                key={area.href}
                href={area.href}
                className="group flex h-full flex-col rounded-lg border border-border border-t-2 border-t-accent bg-white p-6 motion-safe:transition-[transform,border-color] motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:border-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#816432]"
              >
                <p className="text-3xl font-light tabular-nums text-[#816432]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-lg font-semibold text-primary md:text-xl">{area.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#625B52]">{area.description}</p>
                <p className="mt-auto pt-7 text-sm font-semibold text-[#816432] group-hover:underline">분야 살펴보기 →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent">PROCESS</p>
          <div className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-6 h-0.5 w-8 shrink-0 bg-accent" />
            <SectionHeading title="사건 진행 흐름" tone="dark" />
          </div>
          <HomeProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-[#816432]">NOTES</p>
        <div className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-6 h-0.5 w-8 shrink-0 bg-accent" />
          <SectionHeading
            title="법률 실무 노트"
            description={
              "상담 전 많이 궁금해하는 초기 대응 기준을 블로그 글로 정리해두었습니다.\n홈페이지에서는 대표 글만 안내하고, 전체 글은 네이버 블로그에서 확인할 수 있습니다."
            }
          />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {noteCards.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-lg border border-[#e8ddcb] border-t-2 border-t-accent bg-white p-5 shadow-sm motion-safe:transition-[transform,border-color] motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none hover:border-accent md:p-6"
            >
              <p className="inline-flex w-fit items-center rounded border border-[#816432]/60 px-2.5 py-1 text-xs font-semibold tracking-[0.12em] text-[#816432]">{item.label}</p>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8 break-keep [overflow-wrap:anywhere]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#625B52] md:text-[15px] md:leading-7">
                {item.description}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit pt-5 text-sm font-semibold text-primary underline decoration-accent/45 underline-offset-4 transition-colors hover:text-[#816432] focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#816432] md:text-[15px]"
              >
                블로그에서 보기 <span aria-hidden="true" className="ml-1">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
        <SectionHeading title="자주 묻는 질문" />
        <div className="mt-8 divide-y divide-border rounded-lg border border-[#e8ddcb] bg-white/60 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-sm">
          {faqItems.map((item) => (
            <div key={item.question} className="p-5 md:p-6">
              <h3 className="font-semibold text-primary md:text-lg break-keep [overflow-wrap:anywhere]">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[#625B52]">{item.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/faq" className="inline-flex min-h-11 items-center font-semibold text-[#816432] underline decoration-accent underline-offset-4">자주 묻는 질문 전체 보기 →</Link>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1160px] rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/30 md:px-10">
          <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl break-keep [overflow-wrap:anywhere]">
            상담은 현재 상황을 정리하는 과정입니다.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            사건을 바로 맡기기 위한 시간이 아니라,
            <br />
            지금 어떤 문제가 있고 무엇을 먼저 해야 하는지
            <br />
            함께 확인하는 시간입니다.
          </p>
          <div className="mt-8">
            <Link
              href="/consultation"
              className="inline-flex h-11 items-center justify-center rounded-md bg-background px-5 text-sm font-semibold text-primary transition-colors hover:bg-background/90 md:h-12 md:px-7 md:text-base"
            >
              상담 안내 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

