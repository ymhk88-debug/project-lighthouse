import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "처음 오신 분께 | 상담 전 준비자료 안내 | 유민환 변호사의 법률 실무 노트",
  },
  description:
    "형사, 민사, 상속·가사, 행정 상담 전 준비하면 좋은 자료와 상담 전에 정리할 항목을 안내합니다.",
};

const heroChecklist = [
  "받은 연락 또는 서류",
  "사건이 시작된 시점",
  "가지고 있는 자료",
  "가장 걱정되는 부분",
];

const prepItems = [
  "문제가 시작된 시점",
  "상대방과의 관계",
  "현재 받은 서류나 연락",
  "정해진 기한",
  "가지고 있는 자료",
  "원하는 방향",
];

const preparationCards = [
  {
    title: "형사 상담",
    description:
      "경찰 연락, 고소, 조사 일정이 있는 경우에는 연락 경위와 사건 발생 과정을 시간순으로 정리하는 것이 중요합니다.",
    items: [
      "경찰·검찰 연락 내용",
      "출석요구 일시",
      "고소장 또는 사건 관련 문자",
      "상대방과의 카카오톡·문자·통화내역",
      "사건 당시 시간순 정리",
      "CCTV, 사진, 목격자 등 증거 가능성",
    ],
    note:
      "상대방에게 먼저 연락하기 전에는 그 내용이 사건에 어떤 영향을 줄 수 있는지 검토가 필요할 수 있습니다.",
  },
  {
    title: "민사 상담",
    description:
      "돈, 계약, 손해배상, 임대차 분쟁은 계약관계와 돈이 오간 자료를 먼저 확인하는 경우가 많습니다.",
    items: [
      "계약서 또는 합의서",
      "계좌이체 내역",
      "문자·카카오톡·이메일",
      "내용증명",
      "소장·지급명령·판결문",
      "거래명세서·세금계산서·견적서",
    ],
    note:
      "차용증이나 계약서가 없더라도 송금 경위와 대화 내용이 중요한 자료가 될 수 있습니다.",
  },
  {
    title: "상속·가사 상담",
    description:
      "가족관계, 재산 내역, 생전 증여나 유언 여부를 나누어 정리하면 쟁점을 확인하는 데 도움이 됩니다.",
    items: [
      "가족관계증명서",
      "기본증명서",
      "혼인관계증명서",
      "등기부등본",
      "금융자료 또는 재산 내역",
      "유언장, 증여 관련 자료",
    ],
    note:
      "상속 문제는 감정적인 갈등과 별도로 가족관계와 재산자료를 구분해 확인하는 과정이 필요합니다.",
  },
  {
    title: "행정 상담",
    description:
      "행정처분은 처분서에 적힌 수령일, 불복 기간, 처분 사유를 먼저 확인해야 합니다.",
    items: [
      "처분서 또는 통지서",
      "수령일을 확인할 수 있는 자료",
      "의견제출서 또는 이의신청 관련 문서",
      "관련 공문",
      "사진·문자·녹취 등 경위 자료",
      "기존 민원 또는 행정기관과의 연락 내용",
    ],
    note:
      "기한이 있는 행정처분은 먼저 수령일과 불복 기간을 확인하는 것이 중요합니다.",
  },
];

const consultationCases = [
  "경찰서에서 출석 요구를 받은 경우",
  "고소장을 접수했거나 고소를 당한 경우",
  "소장, 지급명령, 내용증명을 받은 경우",
  "돈을 빌려주었는데 받지 못한 경우",
  "계약금, 손해배상, 임대차 문제로 다툼이 생긴 경우",
  "상속재산분할, 유류분, 가족 간 재산 문제로 갈등이 생긴 경우",
  "상대방과 직접 이야기하기 어려운 상황인 경우",
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
        <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-8 text-muted md:text-[17px] md:font-medium md:leading-8 md:text-background/75">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function FirstVisitPage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">처음 오셨나요</p>
          <h1 className="mt-5 max-w-3xl whitespace-pre-line text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
            {"막막한 상황을\n먼저 정리하는 곳입니다."}
          </h1>
          <p className="mt-6 max-w-2xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
            {
              "법률 문제를 처음 겪으면 무엇부터 해야 할지 알기 어렵습니다.\n처음부터 모든 답을 알고 있을 필요는 없습니다.\n중요한 것은 현재 상황을 차분히 정리하고,\n가능한 선택지를 확인하는 것입니다."
            }
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
            <TextLink href="/consultation">상담 안내 보기</TextLink>
            <TextLink href="/practice" variant="secondary">
              업무분야 확인하기
            </TextLink>
          </div>
        </div>

        <div className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
          <p className="text-sm font-semibold text-primary md:text-lg">
            처음 상담 전 확인할 것
          </p>
          <ol className="mt-6 space-y-4">
            {heroChecklist.map((item, index) => (
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

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading
            title="처음부터 모든 답을 알 필요는 없습니다."
            description={
              "경찰서에서 연락을 받았을 때, 소장을 받았을 때, 가족 간 상속문제가 생겼을 때, 돈을 받지 못했을 때 사람들은 대개 비슷한 생각을 합니다.\n\n지금 바로 무엇을 해야 할지, 혼자 대응해도 되는지, 이미 늦은 것은 아닌지 불안해질 수 있습니다.\n\n하지만 상담은 완성된 답을 가지고 오는 자리가 아닙니다.\n현재 상황을 함께 정리하고, 앞으로 무엇을 확인해야 하는지 살펴보는 과정입니다."
            }
          />
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading
            title="상담 전 준비하면 좋은 자료"
            description={
              "상담 전에 모든 자료를 빠짐없이 준비해야 하는 것은 아닙니다.\n다만 현재 가지고 있는 자료와 사건의 흐름을 미리 정리해 오시면 상담에서 사실관계와 쟁점을 더 차분히 확인할 수 있습니다."
            }
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {preparationCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-lg border border-[#e8ddcb] bg-background p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
              >
                <h3 className="text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-primary/70 md:text-[15px] md:leading-7">
                  {card.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-primary/70 md:text-[15px]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-sm leading-7 text-primary/70 md:text-[15px] md:leading-7">
                  {card.note}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted md:text-[15px] md:font-medium md:leading-8 md:text-background/75">
            자료가 전부 준비되지 않았더라도 상담은 가능합니다. 다만 현재 가지고 있는 자료를 기준으로 먼저 사실관계와 기한을 확인하고, 추가로 필요한 자료를 정리하는 방식으로 진행합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            title="분야와 관계없이 함께 정리하면 좋은 것"
            description="상담에서는 결론을 먼저 단정하기보다, 사실관계와 자료를 나누어 확인하는 과정이 필요합니다."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {prepItems.map((item, index) => (
              <div
                key={item}
                className="rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
              >
                <p className="text-xs font-semibold text-accent md:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-primary md:text-lg md:leading-7">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading
            title="급한 마음에 바로 대응하기 전, 먼저 확인해야 합니다."
            description={
              "법률 문제를 처음 겪을 때는 급한 마음에 상대방에게 먼저 연락하거나,\n충분히 검토하지 않은 답변을 보내는 경우가 있습니다.\n\n하지만 사건에 따라서는 짧은 문자 한 줄,\n통화 중 한마디,\n급하게 작성한 합의서가 나중에 불리하게 작용할 수 있습니다.\n\n중요한 연락을 하기 전, 서류를 제출하기 전, 조사에 출석하기 전에는\n현재 상황을 먼저 정리해보는 것이 좋습니다."
            }
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <SectionHeading title="이런 경우 상담을 권합니다." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {consultationCases.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
            >
              <p className="flex gap-3 text-sm font-semibold leading-7 text-primary md:text-lg">
                <span className="shrink-0 font-bold text-accent">✓</span>
                <span>{item}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading
            title="상담은 현재 상황을 정리하는 과정입니다."
            description={
              "상담은 사건을 바로 수임하기 위한 절차가 아니라,\n현재 상황을 정확히 이해하고 가능한 대응 방향을 확인하는 과정입니다.\n\n무엇이 쟁점인지,\n어떤 자료가 필요한지,\n지금 당장 해야 할 일과 하지 말아야 할 일이 무엇인지부터 차근차근 정리하겠습니다.\n\n법률 문제는 결과만큼 과정도 중요합니다.\n불안한 순간일수록, 지금 무엇을 해야 하는지부터 함께 확인해보겠습니다."
            }
          />
        </div>
      </section>

      <section className="px-6 py-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/30 md:px-10">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
            현재 상황부터 함께 정리해보겠습니다.
          </h2>
          <p className="mt-5 max-w-2xl whitespace-pre-line leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            {
              "받은 서류, 연락 내용, 가지고 있는 자료를 바탕으로\n지금 무엇을 확인해야 하는지부터 차분히 살펴보겠습니다."
            }
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
            <Link
              href="/issues"
              className="inline-flex h-11 items-center justify-center rounded-md bg-background px-5 text-sm font-semibold text-primary transition-colors hover:bg-background/90 md:h-12 md:px-7 md:text-base"
            >
              상황별 쟁점 보기
            </Link>
            <Link
              href="/consultation"
              className="inline-flex h-11 items-center justify-center rounded-md border border-background/35 px-5 text-sm font-semibold text-background transition-colors hover:border-accent hover:text-accent md:h-12 md:px-7 md:text-base"
            >
              상담 안내 보기
            </Link>
            <Link
              href="/practice"
              className="inline-flex h-11 items-center justify-center rounded-md border border-background/35 px-5 text-sm font-semibold text-background transition-colors hover:border-accent hover:text-accent md:h-12 md:px-7 md:text-base"
            >
              업무 분야 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




