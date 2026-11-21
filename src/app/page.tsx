import Link from "next/link";
import { ProfileImage } from "@/components/ProfileImage";

const trustItems = [
  "의뢰인의 이야기를 충분히 듣겠습니다.",
  "사건을 방치하지 않겠습니다.",
  "억울함이 남지 않도록 끝까지 살펴보겠습니다.",
];

const situationCards = [
  { title: "경찰서에서 연락을 받았습니다", href: "/issues" },
  { title: "소장이나 지급명령을 받았습니다", href: "/practice/civil" },
  { title: "돈을 받지 못했습니다", href: "/practice/civil" },
  { title: "상속 문제로 가족과 다투고 있습니다", href: "/practice/inheritance-family" },
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
  "상담 전에 어떤 자료를 준비해야 하나요?",
  "전화나 메시지로 먼저 문의할 수 있나요?",
  "사건 진행 방향은 언제 알 수 있나요?",
  "비용은 상담 후에 안내받을 수 있나요?",
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
        <p className="text-sm font-semibold tracking-[0.16em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className={`mt-3 whitespace-pre-line text-2xl font-semibold leading-tight md:text-4xl ${tone === "dark" ? "text-background" : "text-primary"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 whitespace-pre-line text-base leading-8 md:text-[17px] ${tone === "dark" ? "text-background/75" : "text-muted"}`}>
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
          <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-background sm:text-4xl md:text-6xl">
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
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
          <div className="w-full overflow-hidden rounded-lg border border-[#e8ddcb] bg-white/40 p-3 shadow-[0_12px_30px_rgba(15,29,46,0.08)] md:border-accent/25 md:bg-background/95 md:shadow-[0_22px_50px_rgba(0,0,0,0.16)]">
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
              <p className="mt-2 text-sm leading-6 text-muted md:text-[15px] md:leading-7">
                결과를 장담하기보다,
                <br />
                과정에 충실하겠습니다.
              </p>
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
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {situationCards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group min-h-36 rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              <p className="text-base font-semibold leading-7 text-primary md:text-lg">
                {item.title}
              </p>
              <p className="mt-6 text-sm font-medium text-[#816432] group-hover:underline">관련 안내 보기 →</p>
            </Link>
          ))}
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
          <SectionHeading title="주요 업무분야" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-lg border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent"
              >
                <p className="text-lg font-semibold text-primary md:text-xl">{area.title}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{area.description}</p>
                <p className="mt-7 text-sm font-semibold text-[#816432] group-hover:underline">분야 살펴보기 →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
        <SectionHeading title="사건 진행 흐름" />
        <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
          {processSteps.map((step, index) => (
            <div key={step} className="contents">
              <div className="rounded-lg border border-[#e8ddcb] bg-white/60 p-4 text-center shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-5 md:shadow-sm">
                <p className="text-xs font-semibold text-accent md:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-semibold text-primary md:text-lg">{step}</p>
              </div>
              {index < processSteps.length - 1 ? (
                <span className="text-center text-accent md:-rotate-90">↓</span>
              ) : null}
            </div>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
        <SectionHeading
          title="법률 실무 노트"
          description={
            "상담 전 많이 궁금해하는 초기 대응 기준을 블로그 글로 정리해두었습니다.\n홈페이지에서는 대표 글만 안내하고, 전체 글은 네이버 블로그에서 확인할 수 있습니다."
          }
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {noteCards.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-sm"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-accent md:text-sm">{item.label}</p>
              <h3 className="mt-3 text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted md:text-[15px] md:leading-7">
                {item.description}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-primary underline decoration-accent/45 underline-offset-4 transition-colors hover:text-accent md:text-[15px]"
              >
                블로그에서 보기
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-6 py-16 md:py-20">
        <SectionHeading title="자주 묻는 질문" />
        <div className="mt-8 divide-y divide-border rounded-lg border border-[#e8ddcb] bg-white/60 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-sm">
          {faqItems.map((item) => (
            <div key={item} className="p-5">
              <p className="font-semibold text-primary md:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1160px] rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/30 md:px-10">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
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

