import Link from "next/link";

const faqSections = [
  {
    title: "상담 관련 질문",
    items: [
      {
        question: "상담 전에 자료를 모두 준비하지 못해도 되나요?",
        answer:
          "자료를 모두 갖추지 못해도 상담은 가능합니다. 다만 가지고 있는 자료를 미리 정리해 오시면 사실관계와 쟁점을 더 차분히 확인할 수 있습니다.",
      },
      {
        question: "상담만 받고 사건을 맡기지 않아도 되나요?",
        answer:
          "상담을 받은 뒤 사건을 맡길지 여부는 충분히 고민해 결정하셔도 됩니다. 상담에서는 먼저 사건의 흐름, 필요한 자료, 예상되는 절차를 함께 확인합니다.",
      },
      {
        question: "가족이 대신 상담을 받아도 되나요?",
        answer:
          "가족이 상담을 요청할 수는 있습니다. 다만 사건의 구체적인 사실관계는 당사자의 설명이 필요한 경우가 많으므로, 가능하면 당사자와 함께 상담하는 것이 좋습니다.",
      },
      {
        question: "전화로 먼저 문의해도 되나요?",
        answer:
          "가능합니다. 방문 상담은 일정 조율 후 진행되므로, 먼저 사무실 또는 휴대폰 번호로 문의해 주시면 상담 가능 일정을 확인할 수 있습니다.",
      },
    ],
  },
  {
    title: "형사 사건 관련 질문",
    items: [
      {
        question: "경찰에서 연락이 오면 바로 출석해야 하나요?",
        answer:
          "바로 출석하기보다 먼저 사건명, 출석 요구 일정, 본인이 어떤 지위에서 조사를 받는지 확인하는 것이 좋습니다. 조사 전에는 관련 자료와 진술할 내용을 정리할 필요가 있습니다.",
      },
      {
        question: "고소장을 제출하기 전에 무엇을 준비해야 하나요?",
        answer:
          "사건 발생 일시와 장소, 상대방과의 관계, 문자·카카오톡·통화녹음 등 관련 자료를 정리해 두는 것이 좋습니다. 고소장에는 사실관계가 시간순으로 정리되어야 합니다.",
      },
      {
        question: "피해자도 변호사의 도움을 받을 수 있나요?",
        answer:
          "피해자도 고소장 작성, 조사 준비, 합의 과정, 의견서 제출 등에서 변호사의 도움을 받을 수 있습니다. 사건 진행 단계에 따라 필요한 조치가 달라질 수 있습니다.",
      },
      {
        question: "조사 전에 진술 내용을 정리해야 하나요?",
        answer:
          "네. 조사에서는 사실관계가 시간순으로 확인되는 경우가 많습니다. 기억나는 내용, 주고받은 연락, 관련 자료를 미리 정리하면 불필요한 혼선을 줄일 수 있습니다.",
      },
    ],
  },
  {
    title: "민사 사건 관련 질문",
    items: [
      {
        question: "차용증이 없어도 돈을 받을 수 있나요?",
        answer:
          "차용증이 없더라도 계좌이체 내역, 문자·카카오톡, 일부 변제 내역, 반환 약속 등 다른 자료가 있다면 돈의 성격을 확인해 볼 수 있습니다.",
      },
      {
        question: "소장을 받으면 바로 답변서를 내야 하나요?",
        answer:
          "소장을 받으면 먼저 송달일과 답변서 제출기한을 확인해야 합니다. 그다음 청구취지와 청구원인을 살펴보고, 인정할 부분과 다툴 부분을 나누어 정리합니다.",
      },
      {
        question: "지급명령을 받았을 때는 어떻게 해야 하나요?",
        answer:
          "지급명령을 받은 경우 이의신청 기간을 먼저 확인해야 합니다. 기간을 놓치면 그대로 확정될 수 있으므로, 청구금액과 청구원인을 빠르게 검토하는 것이 필요합니다.",
      },
      {
        question: "내용증명을 먼저 보내야 하나요?",
        answer:
          "사건에 따라 내용증명이 도움이 될 수 있지만, 항상 먼저 보내야 하는 것은 아닙니다. 표현, 청구 내용, 기한, 추후 소송 가능성을 함께 고려해 결정하는 것이 좋습니다.",
      },
    ],
  },
  {
    title: "방문·연락 관련 질문",
    items: [
      {
        question: "방문 상담은 예약이 필요한가요?",
        answer:
          "방문 상담은 일정 조율 후 진행됩니다. 사무실 또는 휴대폰 번호로 먼저 연락해 주시면 상담 가능 일정을 확인할 수 있습니다.",
      },
      {
        question: "상담료는 어떻게 확인하나요?",
        answer:
          "상담 방식과 사건 내용에 따라 달라질 수 있으므로, 문의 과정에서 상담 방식과 비용 안내를 함께 확인하시면 됩니다.",
      },
      {
        question: "주차는 가능한가요?",
        answer:
          "방문 전 주차 가능 여부와 출입 방법은 상담 일정 조율 과정에서 함께 안내드립니다.",
      },
      {
        question: "상담 후 바로 사건을 맡겨야 하나요?",
        answer:
          "상담 후 바로 사건을 맡기지 않아도 됩니다. 사건의 방향, 필요한 자료, 예상 절차를 확인한 뒤 충분히 고민해 결정하셔도 됩니다.",
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
  items: { question: string; answer: string }[];
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




