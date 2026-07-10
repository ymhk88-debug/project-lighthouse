import Link from "next/link";

const firstCheckItems = [
  {
    title: "현재 절차 단계",
    description: "내용증명을 준비하는 단계인지, 소송을 제기하려는 단계인지, 소장이나 지급명령을 받은 단계인지 먼저 확인합니다.",
  },
  {
    title: "청구할 금액과 근거",
    description: "청구하려는 금액, 발생 원인, 계산 방식, 일부 변제 여부를 나누어 정리합니다.",
  },
  {
    title: "기한이 있는지",
    description: "답변서 제출기한, 지급명령 이의신청 기간, 조정기일 등 놓치면 불리해질 수 있는 기한을 먼저 확인합니다.",
  },
  {
    title: "남아 있는 자료",
    description: "계약서, 계좌이체 내역, 문자, 카카오톡, 세금계산서, 거래명세서 등 분쟁의 흐름을 보여주는 자료를 정리합니다.",
  },
];

const situationCards = [
  {
    label: "대여금",
    title: "돈을 빌려주었는데 받지 못한 경우",
    description: "차용증, 계좌이체 내역, 반환 약속, 일부 변제 여부를 함께 확인합니다.",
  },
  {
    label: "지급명령",
    title: "지급명령을 신청하거나 받은 경우",
    description: "청구금액, 증거자료, 이의신청 가능성, 민사소송 전환 가능성을 나누어 봅니다.",
  },
  {
    label: "소장 대응",
    title: "소장이나 답변서 제출기한이 있는 경우",
    description: "송달일, 답변서 기한, 청구취지, 인정할 부분과 다툴 부분을 먼저 정리합니다.",
  },
  {
    label: "계약분쟁",
    title: "계약서를 쓰지 않았거나 계약 내용이 다툼이 되는 경우",
    description: "견적서, 거래명세서, 세금계산서, 대화 내용, 이행 내역을 함께 확인합니다.",
  },
  {
    label: "내용증명",
    title: "내용증명을 보내거나 받은 경우",
    description: "청구 내용, 표현 방식, 답변 필요성, 추후 소송 가능성을 함께 검토합니다.",
  },
  {
    label: "조정기일",
    title: "조정기일을 앞둔 경우",
    description: "합의 가능 금액, 양보 가능한 범위, 증거자료, 주장 정리를 미리 나누어 봅니다.",
  },
];

const claimantChecklist = [
  "청구하려는 금액",
  "돈이나 물건, 용역이 오간 경위",
  "계약서, 견적서, 거래명세서 등 근거자료",
  "계좌이체 내역과 일부 변제 여부",
  "문자, 카카오톡, 이메일 등 대화 내용",
  "상대방의 인적사항 또는 사업자 정보",
  "내용증명 발송 여부",
  "소멸시효나 기한 문제",
];

const respondentChecklist = [
  "소장 또는 지급명령을 받은 날짜",
  "답변서 제출기한 또는 이의신청 기간",
  "상대방이 청구하는 금액",
  "인정할 수 있는 부분과 다툴 부분",
  "이미 변제했거나 이행한 내역",
  "계약 내용과 실제 거래 경위",
  "반박할 수 있는 문자, 카카오톡, 이메일",
  "조정 또는 합의 가능성",
];

const preparationCards = [
  {
    label: "소송서류",
    title: "받은 서류",
    items: ["소장", "지급명령", "조정기일 통지서", "내용증명", "답변서 제출 안내문"],
  },
  {
    label: "거래자료",
    title: "계약과 거래 자료",
    items: ["계약서", "견적서", "거래명세서", "세금계산서", "작업내역 또는 납품자료"],
  },
  {
    label: "금전자료",
    title: "송금과 변제 자료",
    items: ["계좌이체 내역", "현금 지급 관련 자료", "일부 변제 내역", "영수증", "정산 내역"],
  },
  {
    label: "대화자료",
    title: "연락과 협의 자료",
    items: ["문자", "카카오톡", "이메일", "통화녹음", "합의 또는 협의 내역"],
  },
];

const civilProcessSteps = [
  {
    title: "상대방과의 관계 확인",
    description:
      "가족, 지인, 거래처, 임대인·임차인, 계약 상대방 등 관계에 따라 쟁점과 자료가 달라질 수 있습니다. 먼저 어떤 관계에서 분쟁이 시작되었는지 살펴봅니다.",
    articleTitle: "민사소송 전 내용증명부터 보내야 할까",
    href: "https://blog.naver.com/lawoffice_mh/224317565769",
  },
  {
    title: "계약·거래 내용 확인",
    description:
      "계약서가 있는지, 구두 약정인지, 견적서·발주서·거래명세서·세금계산서 같은 자료가 남아 있는지 확인합니다.",
    articleTitle: "계약서를 쓰지 않았을 때도 돈을 받을 수 있을까",
    href: "https://blog.naver.com/lawoffice_mh/224319904966",
  },
  {
    title: "분쟁이 발생한 시점 확인",
    description:
      "돈을 지급한 시점, 물건이나 용역을 제공한 시점, 반환을 요구한 시점, 상대방이 거절한 시점을 시간순으로 정리합니다.",
    articleTitle: "민사소송 소장 받았을 때, 답변서 제출기한과 피고 대응 방법",
    href: "https://blog.naver.com/lawoffice_mh/224324287188",
  },
  {
    title: "문자·카카오톡·계좌내역 등 자료 정리",
    description:
      "계좌이체 내역, 문자, 카카오톡, 이메일, 녹취, 사진, 거래자료를 함께 살펴봅니다. 자료의 순서와 의미를 나누어 보는 과정이 필요합니다.",
    articleTitle: "대여금 소송 차용증이 없을 때, 계좌이체·문자·카카오톡 증거 확인 방법",
    href: "https://blog.naver.com/lawoffice_mh/224325644574",
  },
  {
    title: "청구금액 또는 방어 범위 검토",
    description:
      "얼마를 청구할 수 있는지, 상대방 청구 중 다툴 부분은 무엇인지 확인합니다. 일부 인정할 부분과 다툴 부분을 나누어 봅니다.",
    articleTitle: "대여금 소송 계좌이체 내역만 있을 때, 빌려준 돈 입증 방법",
    href: "https://blog.naver.com/lawoffice_mh/224325696409",
  },
  {
    title: "내용증명·지급명령·소송 가능성 검토",
    description:
      "소송을 진행할지, 내용증명이나 지급명령 등 다른 절차를 먼저 검토할지 사건의 자료와 상대방 대응 가능성을 기준으로 나누어 봅니다.",
    articleTitle: "지급명령과 민사소송 중 무엇을 선택해야 할까",
    href: "https://blog.naver.com/lawoffice_mh/224320267710",
  },
  {
    title: "보전처분 또는 강제집행 가능성 확인",
    description:
      "가압류, 가처분, 판결 이후 집행 가능성은 상대방 재산, 자료, 긴급성에 따라 검토가 달라질 수 있습니다.",
    articleTitle: "가압류를 신청하기 전 준비해야 할 자료",
    href: "https://blog.naver.com/lawoffice_mh/224319977367",
  },
];

const relatedPages = [
  { title: "처음 오신 분께", href: "/first-visit" },
  { title: "상담 안내 보기", href: "/consultation" },
  { title: "상황별 쟁점 보기", href: "/issues" },
  { title: "자주 묻는 질문", href: "/faq" },
  { title: "법률 실무 노트", href: "/note" },
];

const noteCards = [
  {
    label: "임대차 보증금",
    title: "임대차 보증금 반환 청구, 보증금을 돌려받지 못했을 때",
    description: "계약 종료 시점, 보증금 반환 요구, 임대차 자료를 함께 확인합니다.",
    href: "https://blog.naver.com/lawoffice_mh/224330645725",
  },
  {
    label: "계약금 반환",
    title: "계약금 반환 청구, 계약이 깨졌을 때 돌려받을 수 있을까",
    description: "계약 체결 경위와 해제·해지 사유, 이미 오간 금액을 나누어 살펴봅니다.",
    href: "https://blog.naver.com/lawoffice_mh/224330670027",
  },
  {
    label: "부당이득",
    title: "부당이득 반환청구, 받은 돈을 돌려주지 않을 때",
    description: "돈을 받은 경위, 반환을 요구한 과정, 상대방의 답변을 함께 정리합니다.",
    href: "https://blog.naver.com/lawoffice_mh/224331955118",
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

export default function CivilPracticePage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">Civil Practice</p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          민사 사건
        </h1>
        <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "민사 분쟁은 청구할 내용과 다툴 내용을 나누어 보고, 계약서·계좌이체·문자·내용증명 등 자료를 먼저 정리하는 것이 중요합니다.\n상담에서는 사건의 흐름과 증거자료를 함께 확인하고, 현재 단계에서 필요한 대응 방향을 검토합니다."
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
            title="민사 사건에서 먼저 확인하는 것"
            description="민사 사건은 소송을 제기하는 상황인지, 소장이나 지급명령을 받은 상황인지에 따라 먼저 확인해야 할 내용이 달라집니다."
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
          title="자주 상담하는 민사 분쟁 상황"
          description="민사 분쟁은 계약서 하나만으로 판단하기보다, 거래 경위와 이후 연락, 송금 내역, 일부 변제 등 여러 자료를 함께 확인해야 합니다."
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
            title="청구하는 입장에서 정리할 것"
            description="돈을 청구하거나 계약상 책임을 묻는 경우에는 청구금액과 근거, 상대방의 의무, 실제 이행 내역을 자료로 정리하는 과정이 필요합니다."
            items={claimantChecklist}
          />
          <ChecklistCard
            title="청구를 받은 입장에서 정리할 것"
            description="소장이나 지급명령을 받은 경우에는 먼저 기한을 확인하고, 상대방 주장에서 인정할 부분과 다툴 부분을 나누어 정리해야 합니다."
            items={respondentChecklist}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <SectionHeading
          title="민사분쟁은 보통 이렇게 정리합니다"
          description={
            "민사분쟁은 상대방과의 관계, 계약이나 거래 내용, 분쟁이 발생한 시점, 남아 있는 자료를 함께 살펴보는 것에서 시작합니다.\n상담에서는 현재 가지고 있는 자료를 기준으로 청구 가능성, 방어 방향, 필요한 절차를 나누어 확인합니다."
          }
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {civilProcessSteps.map((step, index) => (
            <article
              key={step.title}
              className="flex flex-col rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
            >
              <p className="text-xs font-semibold text-accent md:text-sm">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-primary/70 md:text-[15px] md:leading-7">
                {step.description}
              </p>
              <div className="mt-auto pt-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-accent">함께 볼 글</p>
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-sm font-semibold leading-6 text-primary underline decoration-accent/45 underline-offset-4 transition-colors hover:text-accent md:text-[15px]"
                >
                  {step.articleTitle}
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
          {relatedPages.map((page) => (
            <TextLink key={page.href} href={page.href} variant="secondary">
              {page.title}
            </TextLink>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <SectionHeading
          title="상담 전 준비하면 좋은 자료"
          description={
            "자료를 모두 갖추지 못해도 상담은 가능합니다.\n다만 가지고 있는 자료를 미리 정리해 오시면 청구 내용과 다툴 부분을 더 차분히 확인할 수 있습니다."
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
            description="민사 분쟁 초기 대응과 자료 정리에 관해 블로그에 정리한 글을 함께 참고할 수 있습니다."
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
            민사 분쟁은 청구와 증거를 나누어 정리해야 합니다
          </h2>
          <p className="mt-5 max-w-3xl whitespace-pre-line leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            {
              "소장이나 지급명령을 받았거나, 돈과 계약 문제로 분쟁이 생긴 경우에는 현재 단계와 가지고 있는 자료를 먼저 확인하는 것이 필요합니다.\n글만으로 정리되지 않는 부분은 상담에서 함께 확인하겠습니다."
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
