import Link from "next/link";

const blogUrl = "https://blog.naver.com/lawoffice_mh";

const firstCheckItems = [
  {
    title: "가족관계",
    description: "당사자 사이의 관계, 상속인 범위, 혼인관계, 자녀관계 등 기본적인 가족관계를 먼저 확인합니다.",
  },
  {
    title: "재산관계",
    description: "부동산, 예금, 보험, 채무, 사업체 등 분쟁의 대상이 되는 재산과 자료를 나누어 정리합니다.",
  },
  {
    title: "기존 협의 내용",
    description: "가족 간 합의, 대화 내용, 재산분배 논의, 양육 또는 생활비 관련 협의가 있었는지 확인합니다.",
  },
  {
    title: "기한과 절차",
    description: "상속포기·한정승인 기간, 소송 진행 여부, 조정기일 등 놓치면 불리해질 수 있는 기한을 확인합니다.",
  },
];

const situationCards = [
  {
    label: "상속재산분할",
    title: "상속재산을 어떻게 나눌지 다투는 경우",
    description: "상속인 범위, 재산 목록, 기여 내용, 기존 협의 내용을 함께 정리합니다.",
  },
  {
    label: "유류분",
    title: "특정 상속인에게 재산이 많이 이전된 경우",
    description: "생전 증여, 유언, 재산 이전 경위, 상속인별 법정상속분을 함께 확인합니다.",
  },
  {
    label: "상속포기·한정승인",
    title: "빚이 많은 상속이 걱정되는 경우",
    description: "사망일, 상속 사실을 안 날, 채무 규모, 재산 목록, 기간 문제를 먼저 확인합니다.",
  },
  {
    label: "이혼·재산분할",
    title: "혼인관계와 재산분할이 문제 되는 경우",
    description: "혼인기간, 재산 형성 과정, 소득, 채무, 자녀 문제를 나누어 정리합니다.",
  },
  {
    label: "양육·면접교섭",
    title: "자녀 양육과 면접교섭이 문제 되는 경우",
    description: "자녀의 생활환경, 양육 상황, 양육비, 면접교섭 일정과 기존 협의를 함께 확인합니다.",
  },
  {
    label: "가족 간 금전 문제",
    title: "가족 사이 돈거래나 재산관리가 문제 되는 경우",
    description: "송금 내역, 대화 내용, 재산관리 경위, 반환 약속 또는 사용처를 확인합니다.",
  },
];

const inheritanceChecklist = [
  "사망일과 상속 사실을 알게 된 시점",
  "가족관계와 상속인 범위",
  "부동산, 예금, 보험, 차량 등 재산 목록",
  "채무 또는 보증채무 여부",
  "유언장 또는 생전 증여 자료",
  "특정 상속인이 관리한 재산이 있는지",
  "기존 가족 간 협의 내용",
  "상속포기·한정승인 기간 문제",
];

const familyChecklist = [
  "혼인기간과 별거 여부",
  "부부 공동재산과 각자 명의 재산",
  "소득, 채무, 생활비 부담 내역",
  "자녀의 나이와 양육 상황",
  "양육비 또는 면접교섭 관련 협의",
  "폭언, 폭행, 외도 등 주장과 관련 자료",
  "기존 합의서나 대화 내역",
  "원하는 진행 방향",
];

const preparationCards = [
  {
    label: "가족관계",
    title: "가족관계 자료",
    items: ["가족관계증명서", "기본증명서", "혼인관계증명서", "제적등본", "주민등록등본"],
  },
  {
    label: "재산자료",
    title: "재산과 채무 자료",
    items: ["등기부등본", "예금·보험 관련 자료", "차량 또는 사업체 자료", "채무 관련 자료", "세금 또는 공과금 자료"],
  },
  {
    label: "협의자료",
    title: "대화와 합의 자료",
    items: ["문자", "카카오톡", "이메일", "가족 간 합의서", "녹음 또는 메모"],
  },
  {
    label: "절차자료",
    title: "진행 중인 절차 자료",
    items: ["소장 또는 신청서", "조정기일 통지서", "법원에서 받은 서류", "이미 제출한 자료", "상대방이 보낸 문서"],
  },
];

const noteCards = [
  {
    label: "상속재산분할",
    title: "상속재산을 나누기 전에 먼저 확인할 것",
    description: "상속인 범위, 재산 목록, 기존 협의 내용, 기여 부분을 나누어 정리합니다.",
    href: blogUrl,
  },
  {
    label: "유류분",
    title: "유류분을 검토할 때 필요한 자료",
    description: "생전 증여, 유언, 재산 이전 경위, 법정상속분을 함께 확인합니다.",
    href: blogUrl,
  },
  {
    label: "상속포기·한정승인",
    title: "빚이 많은 상속에서 먼저 확인할 기한",
    description: "상속 사실을 안 날, 재산과 채무 규모, 법원 절차를 먼저 점검합니다.",
    href: blogUrl,
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

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="whitespace-pre-line text-2xl font-semibold leading-tight text-primary md:text-background md:text-4xl md:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 whitespace-pre-line text-base leading-8 text-muted md:text-[17px] md:font-medium md:leading-8 md:text-background/75">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ChecklistCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <article className="rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
      <h3 className="text-xl font-semibold leading-8 text-primary md:text-2xl">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-primary/70 md:text-[15px] md:leading-7">{description}</p>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-primary/70 md:text-[15px]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function InheritanceFamilyPracticePage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">Inheritance & Family Practice</p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          상속·가사
        </h1>
        <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "상속과 가사 문제는 가족관계, 재산관계, 기존 협의 내용, 남아 있는 자료를 차분히 나누어 보는 과정이 필요합니다.\n상담에서는 감정적인 문제와 법적인 쟁점을 구분하고, 현재 단계에서 필요한 대응 방향을 함께 확인합니다."
          }
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
          <TextLink href="/consultation">상담 안내 보기</TextLink>
          <TextLink href="/first-visit" variant="secondary">
            처음 오신 분께
          </TextLink>
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading
            title="상속·가사 사건에서 먼저 확인하는 것"
            description="가족 간 문제는 감정적인 갈등과 법적인 쟁점이 함께 얽혀 있는 경우가 많습니다. 먼저 가족관계, 재산관계, 기한과 자료를 나누어 정리합니다."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {firstCheckItems.map((item, index) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#e8ddcb] bg-background p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
              >
                <p className="text-xs font-semibold text-accent md:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-primary/70 md:text-[15px] md:leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <SectionHeading
          title="자주 상담하는 상속·가사 상황"
          description="상속·가사 문제는 한 가지 주장만으로 판단하기보다, 가족관계와 재산자료, 기존 대화와 협의 내용을 함께 확인해야 합니다."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {situationCards.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-accent md:text-sm">{item.label}</p>
              <h3 className="mt-3 text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-primary/70 md:text-[15px] md:leading-7">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-16 md:py-12 lg:grid-cols-2">
          <ChecklistCard
            title="상속 문제에서 정리할 것"
            description="상속 문제는 먼저 상속인 범위와 재산 목록을 확인하고, 생전 증여나 유언, 채무와 기한 문제를 나누어 정리해야 합니다."
            items={inheritanceChecklist}
          />
          <ChecklistCard
            title="가사 문제에서 정리할 것"
            description="이혼, 양육, 재산분할 문제는 혼인기간, 재산 형성 과정, 자녀의 생활환경, 기존 협의 내용을 나누어 정리하는 과정이 필요합니다."
            items={familyChecklist}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <SectionHeading
          title="상담 전 준비하면 좋은 자료"
          description={
            "자료를 모두 갖추지 못해도 상담은 가능합니다.\n다만 가족관계와 재산자료, 기존 대화 내용을 미리 정리해 오시면 쟁점을 더 차분히 확인할 수 있습니다."
          }
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {preparationCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-accent md:text-sm">{card.label}</p>
              <h3 className="mt-3 text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8">
                {card.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-primary/70 md:text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading
            title="관련 법률 실무 노트"
            description="상속·가사 문제는 가족관계와 재산자료를 함께 정리해야 하므로, 관련 글을 참고해 상담 전 쟁점을 미리 살펴볼 수 있습니다."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {noteCards.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#e8ddcb] bg-background p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-accent md:text-sm">{item.label}</p>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-primary/70 md:text-[15px] md:leading-7">
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
        </div>
      </section>

      <section className="px-6 py-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/30 md:px-10">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            상속·가사 문제는 가족관계와 재산관계를 나누어 정리해야 합니다
          </h2>
          <p className="mt-5 max-w-3xl whitespace-pre-line leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            {
              "상속, 유류분, 이혼, 양육 문제는 감정적인 문제와 법적인 쟁점이 함께 얽혀 있는 경우가 많습니다.\n글만으로 정리되지 않는 부분은 상담에서 함께 확인하겠습니다."
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
