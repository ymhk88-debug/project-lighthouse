import Link from "next/link";

const blogUrl = "https://blog.naver.com/lawoffice_mh";

const purposeCards = [
  {
    title: "사실관계 정리",
    description:
      "사건의 흐름, 대화 내용, 입금 내역, 계약 내용 등 판단의 출발점이 되는 사실을 먼저 정리합니다.",
  },
  {
    title: "절차 이해",
    description:
      "소장, 답변서, 경찰조사, 고소장, 조정기일 등 낯선 절차를 차분히 이해할 수 있도록 설명합니다.",
  },
  {
    title: "준비자료 확인",
    description:
      "상담 전 어떤 자료를 준비하면 좋은지, 어떤 부분을 먼저 확인해야 하는지 안내합니다.",
  },
];

const topics = [
  {
    title: "민사분쟁 초기대응",
    description:
      "내용증명, 지급명령, 소장 수령, 답변서, 조정기일 등 민사 사건 초기에 확인해야 할 내용을 다룹니다.",
  },
  {
    title: "대여금·미수금",
    description:
      "차용증이 없을 때, 계좌이체 내역만 있을 때, 돈을 갚겠다는 문자나 카카오톡이 있을 때의 쟁점을 정리합니다.",
  },
  {
    title: "계약분쟁",
    description:
      "계약서가 없거나 계약 내용이 불명확한 경우, 계약금 반환, 해제·해지, 손해배상 문제를 다룹니다.",
  },
  {
    title: "손해배상",
    description:
      "사고, 불법행위, 채무불이행 등으로 손해가 발생했을 때 어떤 자료와 구조로 접근해야 하는지 설명합니다.",
  },
  {
    title: "형사사건 초기대응",
    description:
      "경찰 연락, 고소 대응, 피의자 조사, 피해자 진술, 합의와 처벌불원 등 초기 대응에서 놓치기 쉬운 부분을 정리합니다.",
  },
  {
    title: "상담 전 준비사항",
    description:
      "상담을 더 정확하게 진행하기 위해 미리 정리하면 좋은 자료와 질문을 안내합니다.",
  },
];

const noteCards = [
  {
    label: "형사 초기대응",
    title: "경찰서 연락을 받았을 때 바로 출석해도 될까",
    description: "출석 전 확인할 자료, 사건명, 조사 일정, 진술 전 정리할 내용을 먼저 살펴봅니다.",
    href: "https://blog.naver.com/lawoffice_mh/224312825362",
  },
  {
    label: "민사소송",
    title: "소장을 받았을 때 바로 답변서를 준비해야 하는 이유",
    description: "답변서 제출기한, 청구취지, 청구원인, 인정할 부분과 다툴 부분을 나누어 정리합니다.",
    href: "https://blog.naver.com/lawoffice_mh/224324287188",
  },
  {
    label: "지급명령",
    title: "지급명령과 민사소송 중 무엇을 선택해야 할까",
    description: "대여금·미수금 사건에서 지급명령과 민사소송의 차이, 이의 가능성, 증거자료를 함께 확인합니다.",
    href: "https://blog.naver.com/lawoffice_mh/224320267710",
  },
  {
    label: "대여금·미수금",
    title: "차용증이 없을 때 돈을 받을 수 있을까",
    description: "계좌이체 내역, 문자, 카카오톡, 일부 변제 내역을 중심으로 돈의 성격과 반환 약속을 확인합니다.",
    href: "https://blog.naver.com/lawoffice_mh/224325644574",
  },
  {
    label: "내용증명",
    title: "내용증명을 보내기 전 조심해야 할 표현",
    description: "청구 내용, 기한, 표현 방식, 추후 소송 가능성을 함께 고려해 불필요한 분쟁 확대를 줄입니다.",
    href: "https://blog.naver.com/lawoffice_mh/224320043867",
  },
  {
    label: "조정기일",
    title: "민사소송 조정기일에 가기 전 무엇을 준비해야 할까",
    description: "합의 가능 금액, 증거자료, 주장 정리, 양보 가능한 범위를 미리 나누어 봅니다.",
    href: "https://blog.naver.com/lawoffice_mh/224324459854",
  },
];

function TextLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const className =
    variant === "primary"
      ? "bg-primary text-background hover:bg-primary/90 md:bg-accent md:text-primary md:shadow-[0_10px_24px_rgba(184,155,94,0.16)] md:hover:bg-accent/90"
      : "border border-border bg-background text-primary hover:border-accent md:border-accent/35 md:bg-background/95";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition-colors md:h-12 md:px-7 md:text-base ${className}`}
      >
        {children}
      </a>
    );
  }

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

export default function NotePage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">Legal Practice Notes</p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          법률 실무 노트
        </h1>
        <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "사건을 제대로 이해하기 위해서는 먼저 사실관계와 절차를 차분히 정리해야 합니다.\n법률 실무 노트는 결과를 장담하기 위한 글이 아닙니다. 사건을 더 정확히 이해하고 준비하기 위한 기록입니다."
          }
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
          <TextLink href={blogUrl} external>
            블로그에서 글 보기
          </TextLink>
          <TextLink href="/consultation" variant="secondary">
            상담 안내 보기
          </TextLink>
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              title="먼저 정리하고, 그다음 판단합니다."
              description={
                "법률 문제는 감정적인 답을 찾기보다, 사실관계와 자료를 먼저 정리해야 방향이 보입니다.\n유민환 변호사의 법률 실무 노트는 상담 과정에서 자주 마주하는 질문과 절차를 차분히 정리한 기록입니다."
              }
            />
            <div className="grid gap-3">
              {purposeCards.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
                >
                  <p className="text-xs font-semibold text-accent md:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-primary md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <SectionHeading title="자주 정리하는 주제" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
            >
              <h3 className="text-lg font-semibold text-primary md:text-xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading
            title="대표 법률 실무 노트"
            description={
              "상담 전 자주 궁금해하는 초기 대응 기준을 주제별로 정리했습니다.\n각 글은 사건을 단정하기 위한 글이 아니라, 상담 전에 사실관계와 자료를 정리하기 위한 안내입니다."
            }
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:py-12 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading
            title="전체 글은 블로그에서 확인할 수 있습니다"
            description={
              "홈페이지에서는 법률 실무 노트의 방향과 주요 주제를 정리해두었습니다.\n실제 발행 글은 네이버 블로그에서 계속 업데이트하고 있습니다."
            }
          />
          <TextLink href={blogUrl} external variant="secondary">
            네이버 블로그 바로가기
          </TextLink>
        </div>
      </section>

      <section className="px-6 py-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/30 md:px-10">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            글만으로 정리되지 않는 부분은 상담에서 함께 확인합니다
          </h2>
          <p className="mt-5 max-w-3xl whitespace-pre-line leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            {
              "법률 실무 노트는 사건을 이해하기 위한 출발점입니다.\n다만 실제 사건에서는 대화 내용, 자료의 순서, 상대방의 주장, 이미 진행된 절차에 따라 판단이 달라질 수 있습니다.\n상담에서는 자료와 사실관계를 함께 정리하면서 필요한 대응 방향을 검토합니다."
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




