import Link from "next/link";

const practiceAreas = [
  {
    title: "형사",
    description:
      "경찰 연락, 고소 대응, 조사, 송치 이후 절차처럼 초기에 확인할 쟁점을 정리합니다.\n사건 지위와 사실관계, 진술 내용, 남아 있는 자료를 차분히 살펴봅니다.",
    href: "/practice/criminal",
    cta: "형사사건 흐름 확인하기",
    topics: [
      "형사 초기대응",
      "경찰조사",
      "고소 대응",
      "피해자 조사",
      "성범죄 사건",
      "명예훼손·모욕",
      "스토킹·협박",
      "사기·횡령·배임",
      "구속·재판",
      "합의·양형자료",
    ],
    links: [
      { title: "상황별 쟁점", href: "/issues" },
      { title: "첫 방문 준비", href: "/first-visit" },
      { title: "실무 노트", href: "/note" },
    ],
  },
  {
    title: "민사",
    description:
      "소장 수령, 지급명령, 대여금, 내용증명처럼 자료와 기한, 청구금액을 먼저 확인합니다.\n현재 자료와 상대방 대응 가능성을 기준으로 절차를 나누어 봅니다.",
    href: "/practice/civil",
    cta: "민사분쟁 정리 흐름 확인하기",
    topics: [
      "소장 수령 대응",
      "지급명령",
      "대여금·미수금",
      "내용증명",
      "가압류",
      "임대차 보증금",
      "계약금 반환",
      "부당이득",
      "공사대금·용역대금",
      "물품대금",
      "조정기일 준비",
      "강제집행 검토",
    ],
    links: [
      { title: "상황별 쟁점", href: "/issues" },
      { title: "첫 방문 준비", href: "/first-visit" },
      { title: "실무 노트", href: "/note" },
    ],
  },
  {
    title: "상속·가사",
    description:
      "상속재산, 상속인 범위, 가족 간 금전 문제, 이혼·양육 문제처럼 관계와 자료 확인이 함께 필요한 사안을 살펴봅니다.\n감정적 판단보다 자료와 쟁점을 나누어 정리합니다.",
    href: "/practice/inheritance-family",
    cta: "상속·가사 업무 보기",
    topics: [
      "상속재산 확인",
      "상속인 범위",
      "상속재산분할",
      "유류분",
      "가족 간 금전 문제",
      "이혼 상담 준비",
      "양육 문제",
      "재산분할",
      "친족 간 분쟁 자료 정리",
    ],
    links: [
      { title: "첫 방문 준비", href: "/first-visit" },
      { title: "상담 안내", href: "/consultation" },
      { title: "자주 묻는 질문", href: "/faq" },
    ],
  },
  {
    title: "행정",
    description:
      "행정처분서, 처분일, 송달일, 불복 기간, 처분 사유를 먼저 확인합니다.\n처분서에 기재된 내용과 현재 가능한 절차를 차분히 나누어 봅니다.",
    href: "/practice/administrative",
    cta: "행정처분 상담 준비 확인하기",
    topics: [
      "행정처분서 확인",
      "처분일·송달일 확인",
      "이의신청",
      "행정심판",
      "음주운전 처분",
      "면허정지·취소",
      "영업정지",
      "공무원·자격 관련 처분",
      "불복 기간 확인",
    ],
    links: [
      { title: "상황별 쟁점", href: "/issues" },
      { title: "첫 방문 준비", href: "/first-visit" },
      { title: "자주 묻는 질문", href: "/faq" },
    ],
  },
];

const guideLinks = [
  {
    title: "처음 오신 분께",
    description: "상담 전 준비할 자료와 방문 전 확인할 내용을 정리합니다.",
    href: "/first-visit",
  },
  {
    title: "상담 안내",
    description: "상담이 어떤 순서로 진행되는지 단계별 흐름을 확인합니다.",
    href: "/consultation",
  },
  {
    title: "상황별 쟁점",
    description: "현재 받은 연락이나 서류를 기준으로 쟁점을 나누어 봅니다.",
    href: "/issues",
  },
  {
    title: "자주 묻는 질문",
    description: "상담 전 자주 묻는 질문을 차분히 살펴볼 수 있습니다.",
    href: "/faq",
  },
  {
    title: "법률 실무 노트",
    description: "형사·민사 쟁점과 준비자료를 주제별 글로 확인합니다.",
    href: "/note",
  },
];

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
      ? "bg-primary text-background hover:bg-primary/90 md:bg-accent md:text-primary md:shadow-[0_10px_24px_rgba(184,155,94,0.16)] md:hover:bg-accent/90"
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

function PracticeCard({
  title,
  description,
  href,
  index,
  cta,
  topics,
  links,
}: {
  title: string;
  description: string;
  href: string;
  index: number;
  cta: string;
  topics: string[];
  links: { title: string; href: string }[];
}) {
  return (
    <article className="flex flex-col rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-7 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="text-2xl font-semibold text-primary md:text-3xl">{title}</h3>
          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span
            key={topic}
            className="rounded-md border border-[#e8ddcb] bg-background px-3 py-2 text-sm font-semibold leading-5 text-primary/80 md:border-accent/25"
          >
            {topic}
          </span>
        ))}
      </div>
      <div className="mt-6 grid gap-2 border-t border-[#e8ddcb] pt-5 md:border-accent/20">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-semibold leading-6 text-primary underline decoration-accent/45 underline-offset-4 transition-colors hover:text-accent"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="mt-auto pt-8">
        <TextLink href={href} variant="secondary">
          {cta}
        </TextLink>
      </div>
    </article>
  );
}

export default function PracticePage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">업무분야</p>
        <h1 className="mt-5 max-w-3xl whitespace-pre-line text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          {"분야보다 먼저,\n사건의 흐름을 정리합니다."}
        </h1>
        <p className="mt-6 max-w-2xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "법률 문제는 이름만으로 해결 방향이 정해지지 않습니다.\n현재 어떤 일이 있었는지, 어떤 자료가 있는지,\n앞으로 어떤 절차가 예상되는지부터 차분히 확인하겠습니다."
          }
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
          <TextLink href="/consultation">상담 안내 보기</TextLink>
          <TextLink href="/first-visit" variant="secondary">
            처음 오셨나요?
          </TextLink>
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold leading-tight text-primary md:text-background md:text-4xl md:leading-tight">
              업무 분야별로 자주 정리하는 쟁점
            </h2>
            <p className="mt-6 text-base leading-8 text-muted md:text-[17px] md:font-medium md:leading-8 md:text-background/75">
              상담에서는 사건의 이름보다 현재 받은 연락, 서류, 기한, 상대방과의 관계, 가지고 있는 자료를 먼저 확인합니다. 아래 주제들은 실제 상담에서 자주 나누어 보는 상황을 기준으로 정리했습니다.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {practiceAreas.map((area, index) => (
              <PracticeCard
                key={area.title}
                title={area.title}
                description={area.description}
                href={area.href}
                index={index}
                cta={area.cta}
                topics={area.topics}
                links={area.links}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold leading-tight text-primary md:text-background md:text-4xl md:leading-tight">
              상담 전 함께 보면 좋은 페이지
            </h2>
            <p className="mt-6 text-base leading-8 text-muted md:text-[17px] md:font-medium md:leading-8 md:text-background/75">
              업무 분야를 정하기 어렵다면, 먼저 현재 상황과 받은 서류를 기준으로 정리해 볼 수 있습니다.
            </p>
          </div>
          <div className="grid gap-3">
            {guideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] transition-colors hover:border-accent md:border-accent/25 md:bg-background/95 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
              >
                <h3 className="text-lg font-semibold text-primary md:text-xl">{link.title}</h3>
                <p className="mt-3 text-sm leading-7 text-primary/70 md:text-[15px]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/30 md:px-10">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            사건은 분야보다 과정이 중요합니다.
          </h2>
          <p className="mt-5 max-w-2xl whitespace-pre-line leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            {
              "어떤 분야의 사건이든 먼저 이야기를 듣고,\n사실관계와 자료를 정리한 뒤,\n지금 가능한 대응 방향을 함께 확인하겠습니다."
            }
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




