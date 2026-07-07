import Link from "next/link";

const blogUrl = "https://blog.naver.com/lawoffice_mh";

const firstCheckItems = [
  {
    title: "처분 내용",
    description: "면허취소, 영업정지, 과징금, 자격 제한 등 어떤 처분이나 통지를 받았는지 먼저 확인합니다.",
  },
  {
    title: "통지받은 날짜",
    description: "처분서나 통지서를 언제 받았는지에 따라 이의신청, 행정심판, 행정소송의 기한이 달라질 수 있습니다.",
  },
  {
    title: "불복 또는 제출 기한",
    description: "의견제출, 이의신청, 행정심판 청구, 소송 제기 등 기한이 있는 절차를 먼저 확인해야 합니다.",
  },
  {
    title: "행정기관과 주고받은 자료",
    description: "처분서, 사전통지서, 의견제출서, 조사자료, 기존 제출자료를 함께 정리합니다.",
  },
];

const situationCards = [
  {
    label: "음주운전",
    title: "운전면허 취소·정지 처분을 받은 경우",
    description: "적발 경위, 혈중알코올농도, 운전 필요성, 처분서 수령일, 불복기간을 확인합니다.",
  },
  {
    label: "영업정지",
    title: "영업정지나 과징금 처분을 받은 경우",
    description: "위반 내용, 처분 사전통지, 의견제출 여부, 영업에 미치는 영향을 함께 정리합니다.",
  },
  {
    label: "자격·등록",
    title: "자격정지나 등록취소 문제가 있는 경우",
    description: "처분 사유, 관련 법령, 기존 소명자료, 행정기관과 주고받은 문서를 확인합니다.",
  },
  {
    label: "의견제출",
    title: "처분 전 의견제출 기한이 있는 경우",
    description: "사전통지서, 제출기한, 소명할 자료, 사실관계와 정상참작 사유를 나누어 봅니다.",
  },
  {
    label: "행정심판",
    title: "행정심판을 검토해야 하는 경우",
    description: "처분일, 처분서 수령일, 청구기한, 처분의 위법·부당 사유를 함께 확인합니다.",
  },
  {
    label: "행정소송",
    title: "행정소송을 검토해야 하는 경우",
    description: "처분성, 원고적격, 제소기간, 행정심판 전치 여부, 증거자료를 정리합니다.",
  },
];

const dispositionChecklist = [
  "처분서 또는 사전통지서 수령일",
  "처분의 종류와 내용",
  "처분 사유로 적힌 사실관계",
  "의견제출 또는 불복 기한",
  "행정기관과 주고받은 문서",
  "이미 제출한 의견서나 자료",
  "처분으로 인한 실제 영향",
  "소명할 수 있는 자료",
];

const appealChecklist = [
  "처분서 수령일",
  "이의신청 가능 여부",
  "행정심판 청구기간",
  "행정소송 제소기간",
  "행정심판을 먼저 거쳐야 하는지",
  "처분의 위법 또는 부당 사유",
  "사실관계를 뒷받침할 자료",
  "회복하기 어려운 손해가 있는지",
];

const preparationCards = [
  {
    label: "처분자료",
    title: "받은 문서",
    items: ["처분서", "사전통지서", "의견제출 안내문", "행정심판 안내문", "행정기관 공문"],
  },
  {
    label: "기한자료",
    title: "날짜와 기한",
    items: ["문서를 받은 날짜", "의견제출 기한", "이의신청 기한", "행정심판 청구기간", "소송 제기 기한"],
  },
  {
    label: "소명자료",
    title: "사실관계 자료",
    items: ["사건 경위서", "사진 또는 영상", "진술서", "영업자료", "운전 필요성 관련 자료"],
  },
  {
    label: "제출자료",
    title: "이미 제출한 자료",
    items: ["의견제출서", "소명자료", "행정기관 답변", "조사 당시 자료", "기존 상담 또는 민원자료"],
  },
];

const noteCards = [
  {
    label: "음주운전",
    title: "운전면허 취소 처분을 받았을 때 먼저 확인할 것",
    description: "처분서 수령일, 혈중알코올농도, 운전 필요성, 불복기간을 함께 확인합니다.",
    href: blogUrl,
  },
  {
    label: "의견제출",
    title: "행정처분 전 의견제출서를 준비할 때",
    description: "사전통지서, 제출기한, 소명자료, 정상참작 사유를 나누어 정리합니다.",
    href: blogUrl,
  },
  {
    label: "행정심판",
    title: "행정심판을 검토하기 전 확인할 기한",
    description: "처분일, 처분서 수령일, 청구기간, 처분 사유를 먼저 점검합니다.",
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

export default function AdministrativePracticePage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">Administrative Practice</p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          행정 사건
        </h1>
        <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "행정 사건은 처분서, 통지서, 제출기한, 불복기간을 먼저 확인하는 것이 중요합니다.\n상담에서는 행정기관의 처분 내용과 기한, 제출자료를 함께 정리하고 현재 단계에서 가능한 대응 방향을 검토합니다."
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
            title="행정 사건에서 먼저 확인하는 것"
            description="행정 사건은 처분 내용뿐 아니라, 언제 통지를 받았는지와 어떤 기한이 있는지가 중요합니다. 먼저 문서와 기한, 제출자료를 나누어 정리합니다."
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
          title="자주 상담하는 행정 사건 상황"
          description="행정 사건은 처분의 종류와 기한, 처분 전후 제출자료에 따라 검토할 쟁점이 달라집니다."
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
            title="처분을 받은 입장에서 정리할 것"
            description="행정처분을 받은 경우에는 먼저 처분서와 통지서를 확인하고, 처분 사유와 기한, 제출 가능한 자료를 나누어 정리해야 합니다."
            items={dispositionChecklist}
          />
          <ChecklistCard
            title="불복 절차 전에 확인할 것"
            description="이의신청, 행정심판, 행정소송은 각각 절차와 기한이 다를 수 있습니다. 먼저 어떤 절차가 가능한지와 기한이 남아 있는지 확인해야 합니다."
            items={appealChecklist}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <SectionHeading
          title="상담 전 준비하면 좋은 자료"
          description={
            "자료를 모두 갖추지 못해도 상담은 가능합니다.\n다만 처분서와 통지서, 행정기관과 주고받은 문서를 미리 정리해 오시면 기한과 절차를 더 정확히 확인할 수 있습니다."
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
            description="행정 사건은 기한과 절차가 중요하므로, 관련 글을 참고해 상담 전 처분서와 자료를 미리 정리할 수 있습니다."
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
            행정 사건은 처분서와 기한을 먼저 확인해야 합니다
          </h2>
          <p className="mt-5 max-w-3xl whitespace-pre-line leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            {
              "처분서나 통지서를 받았다면, 처분 내용과 수령일, 불복기간을 먼저 확인하는 것이 필요합니다.\n글만으로 정리되지 않는 부분은 상담에서 함께 확인하겠습니다."
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
