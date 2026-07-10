import Link from "next/link";

const faqSections = [
  {
    title: "형사",
    items: [
      {
        question: "경찰에서 전화가 왔는데 바로 출석해야 하나요?",
        answer:
          "출석 일정을 정하기 전에 연락 내용, 사건 지위, 출석 요구의 성격을 먼저 확인합니다. 조사 전에는 고소장 내용, 사실관계, 관련 자료를 정리해 두는 것이 좋습니다.",
        links: [
          { label: "상황별 쟁점", href: "/issues" },
          { label: "형사 사건", href: "/practice/criminal" },
          { label: "처음 오신 분께", href: "/first-visit" },
        ],
      },
      {
        question: "고소장을 볼 수 있나요?",
        answer:
          "사건 단계와 절차에 따라 확인 가능한 범위가 달라질 수 있습니다. 조사 전에는 어떤 혐의와 사실관계가 문제되는지 파악하는 것이 중요합니다.",
        links: [
          { label: "형사 사건", href: "/practice/criminal" },
          { label: "법률 실무 노트", href: "/note" },
        ],
      },
      {
        question: "피의자신문에서 기억나는 대로 말하면 되나요?",
        answer:
          "기억나는 내용을 말하는 것보다 사실관계를 시간순으로 정리하고, 모르는 부분과 기억나는 부분을 구분하는 것이 중요합니다. 단정적인 표현이나 추측 진술은 조심해서 살펴볼 필요가 있습니다.",
        links: [
          { label: "형사 사건", href: "/practice/criminal" },
          { label: "상담 안내", href: "/consultation" },
        ],
      },
      {
        question: "조서에 서명하기 전에 무엇을 확인해야 하나요?",
        answer:
          "조서에는 본인이 진술한 내용이 기재됩니다. 표현이 정확한지, 빠진 내용이나 다르게 적힌 부분이 없는지 확인해야 합니다.",
        links: [
          { label: "형사 사건", href: "/practice/criminal" },
          { label: "법률 실무 노트", href: "/note" },
        ],
      },
      {
        question: "경찰에서 검찰로 송치되면 무엇이 달라지나요?",
        answer:
          "수사 단계가 바뀌면서 사건을 검찰에서 검토하게 됩니다. 송치 이후에는 처분 가능성, 추가 자료 제출 필요성, 향후 절차를 확인해야 합니다.",
        links: [
          { label: "형사 사건", href: "/practice/criminal" },
          { label: "상담 안내", href: "/consultation" },
        ],
      },
      {
        question: "형사사건 상담 전에는 어떤 자료를 준비하면 좋나요?",
        answer:
          "수사기관 연락 내용, 출석요구, 고소장 관련 자료, 문자·카카오톡·통화내역, 사건 발생 경위, 상대방과의 관계를 정리하면 도움이 됩니다. 자료가 전부 없어도 상담은 가능합니다.",
        links: [
          { label: "처음 오신 분께", href: "/first-visit" },
          { label: "형사 사건", href: "/practice/criminal" },
        ],
      },
    ],
  },
  {
    title: "민사",
    items: [
      {
        question: "소장을 받았는데 답변서를 안 내면 어떻게 되나요?",
        answer:
          "소장을 받은 날과 답변서 제출기한을 먼저 확인합니다. 답변서를 제출하지 않으면 상대방 주장에 대한 반박이 충분히 정리되지 못할 수 있어, 청구취지와 청구원인을 먼저 살펴보는 과정이 필요합니다.",
        links: [
          { label: "상황별 쟁점", href: "/issues" },
          { label: "민사 사건", href: "/practice/civil" },
          { label: "처음 오신 분께", href: "/first-visit" },
        ],
      },
      {
        question: "지급명령을 받았는데 이의신청을 해야 하나요?",
        answer:
          "지급명령은 정해진 기간 안에 대응 여부를 결정해야 합니다. 청구금액, 청구 원인, 실제 채무 존재 여부, 증거자료를 먼저 확인합니다.",
        links: [
          { label: "상황별 쟁점", href: "/issues" },
          { label: "민사 사건", href: "/practice/civil" },
          { label: "법률 실무 노트", href: "/note" },
        ],
      },
      {
        question: "차용증이 없는데 돈을 받을 수 있나요?",
        answer:
          "차용증이 없더라도 계좌이체 내역, 문자, 카카오톡, 일부 변제, 상환 약속 등 다른 자료를 함께 검토할 수 있습니다. 돈의 성격이 대여금인지, 투자금인지, 증여인지가 쟁점이 될 수 있습니다.",
        links: [
          { label: "민사 사건", href: "/practice/civil" },
          { label: "법률 실무 노트", href: "/note" },
        ],
      },
      {
        question: "계좌이체 내역만 있어도 대여금 청구가 가능한가요?",
        answer:
          "계좌이체 내역은 중요한 자료가 될 수 있지만, 송금 경위와 반환 약속, 돈의 성격을 함께 봐야 합니다. 상대방이 다른 주장을 할 가능성도 함께 검토합니다.",
        links: [
          { label: "민사 사건", href: "/practice/civil" },
          { label: "법률 실무 노트", href: "/note" },
        ],
      },
      {
        question: "내용증명은 먼저 보내는 게 좋나요?",
        answer:
          "내용증명은 상대방에게 입장을 전달하고 추후 분쟁에서 자료로 남길 수 있습니다. 다만 표현을 신중하게 정리해야 하며, 감정적인 표현이나 단정적인 표현은 피하는 것이 좋습니다.",
        links: [
          { label: "상황별 쟁점", href: "/issues" },
          { label: "민사 사건", href: "/practice/civil" },
          { label: "법률 실무 노트", href: "/note" },
        ],
      },
      {
        question: "보증금을 못 돌려받으면 바로 소송해야 하나요?",
        answer:
          "계약서, 임대차 기간, 퇴거 여부, 보증금 반환 약속, 내용증명 발송 여부, 임차권등기명령 필요성을 먼저 확인합니다. 바로 소송만 검토하기보다 현재 단계에서 가능한 조치를 나누어 봅니다.",
        links: [
          { label: "상황별 쟁점", href: "/issues" },
          { label: "민사 사건", href: "/practice/civil" },
          { label: "처음 오신 분께", href: "/first-visit" },
        ],
      },
    ],
  },
  {
    title: "상속·가사",
    items: [
      {
        question: "상속재산을 정확히 몰라도 상담이 가능한가요?",
        answer:
          "상속재산이 전부 정리되지 않았더라도 상담은 가능합니다. 가족관계, 사망일, 알고 있는 재산과 채무, 상속인 범위, 받은 서류를 기준으로 먼저 확인할 수 있습니다.",
        links: [
          { label: "처음 오신 분께", href: "/first-visit" },
          { label: "상속·가사", href: "/practice/inheritance-family" },
        ],
      },
      {
        question: "가족 간 돈 문제도 소송으로 정리할 수 있나요?",
        answer:
          "가족 간 돈 문제도 대여금, 증여, 생활비, 상속재산 분배 등 법률관계가 문제될 수 있습니다. 돈이 오간 경위와 반환 약속, 가족관계, 관련 자료를 함께 살펴봅니다.",
        links: [
          { label: "상속·가사", href: "/practice/inheritance-family" },
          { label: "상담 안내", href: "/consultation" },
        ],
      },
      {
        question: "상속 관련 상담 전에는 어떤 자료가 필요한가요?",
        answer:
          "가족관계증명서, 기본증명서, 사망일, 상속인 관계, 알고 있는 재산과 채무, 금융자료, 부동산 자료, 기존 합의 내용을 준비하면 상담에 도움이 됩니다.",
        links: [
          { label: "처음 오신 분께", href: "/first-visit" },
          { label: "상속·가사", href: "/practice/inheritance-family" },
        ],
      },
      {
        question: "이혼이나 양육 문제 상담 전에는 무엇을 정리해야 하나요?",
        answer:
          "혼인 기간, 자녀 여부, 별거 여부, 재산 형성 경위, 양육 상황, 상대방과의 대화 내용, 이미 받은 서류를 정리하면 상담에 도움이 됩니다.",
        links: [
          { label: "처음 오신 분께", href: "/first-visit" },
          { label: "상속·가사", href: "/practice/inheritance-family" },
        ],
      },
    ],
  },
  {
    title: "행정",
    items: [
      {
        question: "행정처분서를 받으면 가장 먼저 무엇을 확인해야 하나요?",
        answer:
          "처분서의 처분일, 송달일, 불복 기간, 처분 사유, 담당 기관을 먼저 확인합니다. 기한이 지나면 대응 방식이 제한될 수 있으므로 날짜 확인이 중요합니다.",
        links: [
          { label: "상황별 쟁점", href: "/issues" },
          { label: "행정 사건", href: "/practice/administrative" },
          { label: "처음 오신 분께", href: "/first-visit" },
        ],
      },
      {
        question: "이의신청이나 행정심판 기한은 어떻게 확인하나요?",
        answer:
          "처분서에 기재된 불복 절차와 기한을 먼저 확인하고, 실제 송달일과 처분일을 구분해서 보아야 합니다.",
        links: [
          { label: "행정 사건", href: "/practice/administrative" },
          { label: "상담 안내", href: "/consultation" },
        ],
      },
      {
        question: "음주운전 처분 상담 전에는 어떤 자료가 필요한가요?",
        answer:
          "처분서, 단속 경위, 혈중알코올농도, 운전 경위, 생계 관련 자료, 기존 전력 여부, 경찰 조사 자료를 준비하면 도움이 됩니다.",
        links: [
          { label: "처음 오신 분께", href: "/first-visit" },
          { label: "행정 사건", href: "/practice/administrative" },
        ],
      },
    ],
  },
  {
    title: "상담 준비",
    items: [
      {
        question: "자료가 전부 준비되지 않아도 상담이 가능한가요?",
        answer:
          "자료가 전부 준비되지 않아도 상담은 가능합니다. 현재 가지고 있는 자료를 기준으로 먼저 사실관계와 쟁점을 정리하고, 추가로 필요한 자료는 상담 과정에서 확인할 수 있습니다.",
        links: [
          { label: "처음 오신 분께", href: "/first-visit" },
          { label: "상담 안내", href: "/consultation" },
        ],
      },
      {
        question: "상담 전에 사건을 시간순으로 정리해야 하나요?",
        answer:
          "시간순 정리는 상담에 도움이 됩니다. 정확한 문서 형식보다 언제, 누구와, 어떤 일이 있었는지를 간단히 정리하는 것이 중요합니다.",
        links: [
          { label: "처음 오신 분께", href: "/first-visit" },
          { label: "상담 안내", href: "/consultation" },
        ],
      },
      {
        question: "상담에서는 어떤 방식으로 사건을 확인하나요?",
        answer:
          "상담에서는 현재 상황, 받은 서류와 기한, 사실관계, 자료, 쟁점, 대응 방향을 순서대로 확인합니다.",
        links: [{ label: "상담 안내", href: "/consultation" }],
      },
      {
        question: "상담 전에 블로그 글을 읽고 가면 도움이 되나요?",
        answer:
          "관련 글을 미리 읽으면 절차와 쟁점을 이해하는 데 도움이 될 수 있습니다. 다만 글은 일반적인 안내이므로 실제 사건에서는 자료와 구체적인 사실관계를 함께 확인해야 합니다.",
        links: [
          { label: "법률 실무 노트", href: "/note" },
          { label: "처음 오신 분께", href: "/first-visit" },
        ],
      },
    ],
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

function FaqSection({
  title,
  items,
  index,
}: {
  title: string;
  items: {
    question: string;
    answer: string;
    links: { label: string; href: string }[];
  }[];
  index: number;
}) {
  const sectionClass =
    index % 2 === 0
      ? "border-y border-border bg-white/35 md:border-accent/15 md:bg-primary"
      : "bg-background md:bg-primary";

  return (
    <section className={sectionClass}>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:py-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold text-accent md:text-sm">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-primary md:text-background md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-border rounded-lg border border-[#e8ddcb] bg-white/60 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
          {items.map((item) => (
            <details key={item.question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold leading-7 text-primary md:text-lg md:leading-8">
                <span>{item.question}</span>
                <span className="text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">{item.answer}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <Link
                    key={`${item.question}-${link.href}`}
                    href={link.href}
                    className="inline-flex rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:border-accent md:border-accent/30 md:text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">FAQ</p>
        <h1 className="mt-5 max-w-3xl whitespace-pre-line text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          {"자주 묻는 질문을\n먼저 정리했습니다."}
        </h1>
        <p className="mt-6 max-w-2xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "상담 전 자주 궁금해하시는 내용을 모았습니다.\n상황마다 답은 달라질 수 있지만,\n먼저 확인하면 도움이 되는 기준을 정리했습니다."
          }
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
          <TextLink href="/consultation">상담 안내 보기</TextLink>
          <TextLink href="/first-visit" variant="secondary">
            처음 오셨나요?
          </TextLink>
        </div>
      </section>

      {faqSections.map((section, index) => (
        <FaqSection
          key={section.title}
          title={section.title}
          items={section.items}
          index={index}
        />
      ))}

      <section className="px-6 py-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/30 md:px-10">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            질문만으로 정리되지 않는 부분은 상담에서 함께 확인하겠습니다.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            FAQ만으로 해결되지 않는 부분은 현재 상황과 자료를 바탕으로
            차분히 확인해보겠습니다.
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




