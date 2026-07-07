import Link from "next/link";

const practiceAreas = [
  {
    title: "형사",
    description:
      "경찰 연락이나 조사 출석 전에는 사실관계와 진술 방향을 먼저 정리해야 합니다.\n받은 연락, 사건 경위, 보유 자료를 함께 확인하며 대응 방향을 살펴봅니다.",
    href: "/practice/criminal",
  },
  {
    title: "민사",
    description:
      "소장, 지급명령, 내용증명은 기한과 자료 정리가 중요합니다.\n주장할 내용과 입증할 자료를 나누어 보고, 지금 해야 할 일을 차분히 확인합니다.",
    href: "/practice/civil",
  },
  {
    title: "상속·가사",
    description:
      "가족 간 문제는 감정과 사실관계가 함께 얽혀 있는 경우가 많습니다.\n상속재산, 기여, 자료, 대화 내용을 정리하며 가능한 선택지를 살펴봅니다.",
    href: "/practice/inheritance-family",
  },
  {
    title: "행정",
    description:
      "행정처분이나 기관 대응은 절차와 기간을 놓치지 않는 것이 중요합니다.\n처분 내용, 통지서, 진행 경과를 확인하고 대응 가능성을 검토합니다.",
    href: "/practice/administrative",
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
}: {
  title: string;
  description: string;
  href: string;
  index: number;
}) {
  return (
    <article className="flex min-h-72 flex-col rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-7 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
      <p className="text-xs font-semibold text-accent md:text-sm">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h2 className="mt-4 text-2xl font-semibold text-primary md:text-3xl">{title}</h2>
      <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted md:text-[17px] md:font-medium md:leading-8 md:text-primary/70">
        {description}
      </p>
      <div className="mt-auto pt-8">
        <TextLink href={href} variant="secondary">
          자세히 보기
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
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-16 md:py-12 md:grid-cols-2">
          {practiceAreas.map((area, index) => (
            <PracticeCard
              key={area.title}
              title={area.title}
              description={area.description}
              href={area.href}
              index={index}
            />
          ))}
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




