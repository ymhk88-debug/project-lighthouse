import Link from "next/link";
import type { Metadata } from "next";

const consultationSteps = [
  {
    title: "현재 상황 확인",
    description:
      "어떤 문제로 상담을 요청하게 되었는지, 사건이 언제부터 시작되었는지 먼저 확인합니다.",
  },
  {
    title: "받은 서류와 기한 확인",
    description:
      "소장, 지급명령, 출석요구, 처분서처럼 기한이 있는 자료가 있는지 확인합니다.",
  },
  {
    title: "사실관계 시간순 정리",
    description:
      "상대방과의 관계, 대화 내용, 돈이 오간 내역, 사건 발생 경위를 시간순으로 나누어 봅니다.",
  },
  {
    title: "자료와 증거 확인",
    description:
      "계약서, 문자, 카카오톡, 송금 내역, 사진, 녹취 등 현재 가지고 있는 자료를 살펴봅니다.",
  },
  {
    title: "쟁점 구분",
    description:
      "인정할 부분과 다툴 부분, 먼저 확인해야 할 부분을 나누어 정리합니다.",
  },
  {
    title: "대응 방향 검토",
    description:
      "소송, 합의, 고소, 이의신청, 내용증명 등 가능한 대응 방향을 사안에 맞게 검토합니다.",
  },
  {
    title: "진행 방식 확인",
    description:
      "상담 이후 추가 자료가 필요한지, 사건으로 진행할지, 진행한다면 어떤 방식이 적절한지 확인합니다.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "상담 안내 | 상담 진행 흐름 | 유민환 변호사의 법률 실무 노트",
  },
  description:
    "상담에서 현재 상황, 받은 서류, 기한, 사실관계, 자료와 쟁점을 확인하는 흐름을 안내합니다.",
};

const consultationPrepItems = [
  {
    title: "사건이 시작된 시점",
    description: "문제가 언제, 어떤 계기로 시작되었는지 시간순으로 정리합니다.",
  },
  {
    title: "상대방과의 관계",
    description: "가족, 거래처, 지인, 회사, 수사기관 등 상대방과의 관계를 확인합니다.",
  },
  {
    title: "현재 받은 서류",
    description: "소장, 지급명령, 고소장, 출석요구, 처분서 등 받은 서류를 먼저 확인합니다.",
  },
  {
    title: "문자와 송금 내역",
    description: "문자, 카카오톡, 이메일, 계좌이체 내역은 사실관계를 확인하는 중요한 자료가 될 수 있습니다.",
  },
  {
    title: "원하는 방향",
    description: "합의, 방어, 청구, 대응, 정리 등 현재 원하는 방향을 함께 확인합니다.",
  },
  {
    title: "기한이 있는지",
    description: "답변서 제출기한, 출석일, 이의신청 기간 등 기한이 있는 사건은 먼저 확인해야 합니다.",
  },
];

const faqItems = [
  {
    question: "상담하면 바로 사건을 맡겨야 하나요?",
    answer: "아닙니다.\n상담 후 충분히 검토하신 뒤 결정하셔도 됩니다.",
  },
  {
    question: "자료가 부족해도 상담이 가능한가요?",
    answer:
      "가능합니다.\n현재 자료를 함께 검토하고,\n추가로 필요한 자료를 안내드립니다.",
  },
  {
    question: "상담에서는 무엇을 하나요?",
    answer:
      "현재 상황과 사실관계를 정리하고,\n쟁점을 확인한 뒤\n가능한 대응 방향을 설명드립니다.",
  },
];

const afterSteps = ["상담", "자료 보완", "사건 검토", "위임 여부 결정", "사건 진행"];
const officePhone = "055-263-5882";
const mobilePhone = "050-5948-5158";

const relatedPages = [
  {
    title: "상황별 쟁점 보기",
    description:
      "경찰 연락, 소장 수령, 지급명령, 대여금, 보증금 반환 등 자주 상담하는 상황을 먼저 확인할 수 있습니다.",
    href: "/issues",
  },
  {
    title: "처음 오신 분께",
    description:
      "형사, 민사, 상속·가사, 행정 상담 전에 준비하면 좋은 자료를 확인할 수 있습니다.",
    href: "/first-visit",
  },
  {
    title: "업무 분야 보기",
    description:
      "형사, 민사, 상속·가사, 행정 분야별로 상담에서 확인하는 쟁점을 살펴볼 수 있습니다.",
    href: "/practice",
  },
  {
    title: "오시는 길",
    description: "방문 상담 전 사무실 위치와 연락처를 확인할 수 있습니다.",
    href: "/location",
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

export default function ConsultationPage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">상담 안내</p>
        <h1 className="mt-5 max-w-3xl whitespace-pre-line text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          {"상담은\n현재 상황을 함께 정리하는 시간입니다."}
        </h1>
        <p className="mt-6 max-w-2xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "사건을 바로 맡기기 위한 시간이 아니라,\n\n현재 상황을 확인하고,\n\n가능한 해결 방향을 함께 살펴보는 과정입니다."
          }
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
          <TextLink href="/consultation">상담 문의하기</TextLink>
          <TextLink href="/first-visit" variant="secondary">
            처음 오셨나요?
          </TextLink>
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading
            title="상담은 보통 이렇게 진행됩니다"
            description="상담에서는 결론을 먼저 단정하기보다, 현재 상황과 자료를 나누어 확인하면서 필요한 대응 방향을 검토합니다."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {consultationSteps.map((item, index) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
              >
                <p className="text-xs font-semibold text-accent md:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8">
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
        <SectionHeading title="상담 전에 함께 확인하면 좋은 페이지" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {relatedPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] transition-colors hover:border-accent md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
            >
              <h3 className="text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8">
                {page.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-primary/70 md:text-[15px] md:leading-7">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            title="상담 전에 미리 정리하면 좋은 것"
            description={
              "상담에서는 결론부터 정하기보다, 먼저 사실관계와 자료를 나누어 확인합니다.\n아래 항목을 미리 정리해 오시면 상담 시간을 더 효율적으로 사용할 수 있습니다."
            }
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {consultationPrepItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading title="자주 받는 질문" />
          <div className="mt-8 divide-y divide-border rounded-lg border border-[#e8ddcb] bg-white/60 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
            {faqItems.map((item) => (
              <details key={item.question} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-primary md:text-lg">
                  <span>{item.question}</span>
                  <span className="text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <SectionHeading title="상담 후에는 어떻게 진행되나요?" />
        <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
          {afterSteps.map((step, index) => (
            <div key={step} className="contents">
              <div className="rounded-lg border border-[#e8ddcb] bg-white/60 p-4 text-center shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-5 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
                <p className="text-xs font-semibold text-accent md:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-semibold text-primary md:text-lg">{step}</p>
              </div>
              {index < afterSteps.length - 1 ? (
                <span className="text-center text-accent md:-rotate-90">↓</span>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/30 md:px-10">
          <h2 className="max-w-2xl whitespace-pre-line text-3xl font-semibold leading-tight md:text-4xl">
            {"현재 상황부터\n함께 정리해보겠습니다."}
          </h2>
          <p className="mt-5 max-w-2xl whitespace-pre-line leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            {
              "상담은 현재 상황을 정리하고, 자료와 기한을 함께 확인한 뒤 가능한 대응 방향을 검토하는 과정입니다.\n사건마다 필요한 대응은 달라질 수 있으므로, 상담 전에는 가지고 있는 자료와 주요 경위를 정리해 오시면 도움이 됩니다."
            }
          </p>
          <div className="mt-6 max-w-sm rounded-md border border-background/20 bg-background/10 p-4">
            <p className="text-sm font-semibold text-background">상담 문의</p>
            <p className="mt-2 text-sm leading-6 text-background/75 md:text-[15px]">
              자료가 모두 정리되어 있지 않더라도, 현재 가지고 있는 서류와
              문자·카카오톡·송금내역 등부터 함께 확인할 수 있습니다.
            </p>
            <p className="mt-2 text-sm text-background/75 md:text-[15px]">
              사무실{" "}
              <a
                href={`tel:${officePhone}`}
                className="transition-colors hover:text-accent"
              >
                {officePhone}
              </a>
            </p>
            <p className="mt-1 text-sm text-background/75 md:text-[15px]">
              휴대폰{" "}
              <a
                href={`tel:${mobilePhone}`}
                className="transition-colors hover:text-accent"
              >
                {mobilePhone}
              </a>
            </p>
            <p className="mt-3 text-sm leading-6 text-background/75 md:text-[15px]">
              방문 상담은 일정 조율 후 진행됩니다.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/location"
              className="inline-flex h-11 items-center justify-center rounded-md bg-background px-5 text-sm font-semibold text-primary transition-colors hover:bg-background/90 md:h-12 md:px-7 md:text-base"
            >
              오시는 길 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




