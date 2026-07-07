import Link from "next/link";

const workingPrinciples = [
  {
    title: "먼저 이야기를 듣습니다.",
    description:
      "사건은 서류만으로 시작되지 않습니다.\n\n의뢰인이 어떤 상황에서 지금 이 문제를 겪게 되었는지,\n무엇이 가장 걱정되는지,\n무엇이 가장 억울한지를 먼저 듣는 것부터 시작합니다.",
  },
  {
    title: "사실관계를 정리합니다.",
    description:
      "같은 사건이라도 사실관계가 조금만 달라져도 법률적인 판단은 달라질 수 있습니다.\n\n자료를 하나씩 확인하고,\n쟁점을 정리하며,\n무엇이 중요한지 함께 살펴봅니다.",
  },
  {
    title: "사건을 방치하지 않습니다.",
    description:
      "사건은 처음보다 중간이 더 중요합니다.\n\n서면을 제출하고,\n기일을 준비하고,\n필요한 자료를 확인하는 과정까지\n끝까지 신경 쓰겠습니다.",
  },
  {
    title: "결과보다 과정을 중요하게 생각합니다.",
    description:
      "결과를 장담하는 것은 변호사가 할 수 있는 약속이 아닙니다.\n\n하지만 과정에 충실하겠다는 약속은 드릴 수 있습니다.\n\n신뢰는 말이 아니라 사건을 대하는 과정에서 만들어진다고 믿습니다.",
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

function PrincipleSection({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  const sectionClass =
    index % 2 === 0
      ? "border-y border-border bg-white/35 md:border-accent/15 md:bg-primary"
      : "bg-background md:bg-primary";

  return (
    <section className={sectionClass}>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:py-12 md:grid-cols-[0.75fr_1.25fr] md:items-start">
        <div>
          <p className="text-xs font-semibold text-accent md:text-sm">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-primary md:text-background md:text-4xl md:leading-tight">
            {title}
          </h2>
        </div>
        <div className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-7 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
          <p className="whitespace-pre-line text-base leading-8 text-muted md:text-[17px] md:font-medium md:leading-8 md:text-primary/70">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function WorkingStylePage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">일하는 방식</p>
          <h1 className="mt-5 max-w-3xl whitespace-pre-line text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
            {"결과를 장담하지 않습니다.\n과정을 끝까지 책임지겠습니다."}
          </h1>
          <p className="mt-6 max-w-2xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
            {
              "좋은 결과를 약속하는 것은 변호사가 할 수 있는 일이 아닙니다.\n\n하지만 의뢰인의 이야기를 충분히 듣고,\n사실관계를 확인하며,\n과정을 끝까지 책임지는 것은\n변호사가 해야 할 일이라고 생각합니다."
            }
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
            <TextLink href="/consultation">상담 안내 보기</TextLink>
            <TextLink href="/first-visit" variant="secondary">
              처음 오셨나요?
            </TextLink>
          </div>
        </div>

        <div className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
          <p className="text-sm font-semibold text-primary md:text-lg">
            사건을 대하는 기준
          </p>
          <ol className="mt-6 space-y-4">
            {["듣기", "정리", "점검", "과정"].map((item, index) => (
              <li
                key={item}
                className="flex gap-4 border-b border-border pb-4 last:border-b-0 last:pb-0"
              >
                <span className="text-sm font-semibold text-accent md:text-[15px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold leading-6 text-primary md:text-lg md:leading-7">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {workingPrinciples.map((item, index) => (
        <PrincipleSection
          key={item.title}
          index={index}
          title={item.title}
          description={item.description}
        />
      ))}

      <section className="px-6 py-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/30 md:px-10">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            현재 상황을 함께 정리해보겠습니다.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            지금 무엇이 가장 중요한지부터 차분히 살펴보겠습니다.
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




