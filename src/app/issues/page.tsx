import type { Metadata } from "next";
import Link from "next/link";

const blogUrl = "https://blog.naver.com/lawoffice_mh";

export const metadata: Metadata = {
  title: {
    absolute: "상담에서 자주 정리하는 상황 | 유민환 변호사의 법률 실무 노트",
  },
  description:
    "경찰 연락, 고소 대응, 소장 수령, 지급명령, 대여금, 내용증명, 보증금 반환 등 상담 전 자주 확인하는 상황별 쟁점을 정리합니다.",
};

const issueCards = [
  {
    title: "경찰서에서 연락을 받은 경우",
    description:
      "경찰에서 연락을 받았을 때는 누가 어떤 이유로 연락했는지와 자신의 사건 지위를 먼저 확인합니다.",
    checks: ["연락한 기관과 담당자", "출석 요청 일자", "피의자·참고인·피해자 등 사건 지위"],
    field: "형사",
    articleTitle: "경찰서 연락을 받았을 때 바로 출석해도 될까",
    href: "https://blog.naver.com/lawoffice_mh/224312825362",
  },
  {
    title: "고소장을 받거나 고소 사실을 알게 된 경우",
    description:
      "고소를 당한 경우에는 감정적으로 대응하기보다 어떤 사실관계가 문제되는지 먼저 정리합니다.",
    checks: ["고소 사실을 알게 된 경위", "문제되는 혐의 또는 주장 내용", "상대방과의 관계와 기존 대화"],
    field: "형사",
    articleTitle: "고소를 당했을 때 절대 먼저 하면 안 되는 행동",
    href: "https://blog.naver.com/lawoffice_mh/224313362832",
  },
  {
    title: "경찰조사를 앞둔 경우",
    description:
      "경찰조사 전에는 기억나는 부분과 불분명한 부분을 구분하고, 자료와 진술 내용을 함께 정리합니다.",
    checks: ["조사 예정일", "조사 대상 사건", "진술해야 할 사실관계와 자료"],
    field: "형사",
    articleTitle: "피의자신문에서 가장 조심해야 할 진술",
    href: "https://blog.naver.com/lawoffice_mh/224312956655",
  },
  {
    title: "피해자로 조사를 앞둔 경우",
    description:
      "피해자 조사는 피해 경위와 자료, 진술 흐름을 시간순으로 정리하는 과정이 필요합니다.",
    checks: ["피해 발생 일시와 장소", "상대방과의 관계", "진술을 뒷받침할 자료"],
    field: "형사",
    articleTitle: "피해자가 경찰조사를 앞두고 준비해야 할 것",
    href: "https://blog.naver.com/lawoffice_mh/224313369031",
  },
  {
    title: "소장을 받은 경우",
    description:
      "소장을 받으면 먼저 송달일과 답변서 제출기한을 확인하고, 상대방이 무엇을 청구하는지 살펴봅니다.",
    checks: ["소장을 받은 날짜", "답변서 제출기한", "청구취지와 청구원인"],
    field: "민사",
    articleTitle: "민사소송 소장 받았을 때, 답변서 제출기한과 피고 대응 방법",
    href: "https://blog.naver.com/lawoffice_mh/224324287188",
  },
  {
    title: "지급명령을 받은 경우 또는 고민하는 경우",
    description:
      "지급명령은 정해진 기간 안에 대응 여부를 검토해야 하므로, 청구금액과 자료를 함께 확인합니다.",
    checks: ["지급명령을 받은 날짜", "이의신청 기간", "실제 채무 존재 여부와 금액"],
    field: "민사",
    articleTitle: "지급명령과 민사소송 중 무엇을 선택해야 할까",
    href: "https://blog.naver.com/lawoffice_mh/224320267710",
  },
  {
    title: "돈을 빌려줬는데 받지 못한 경우",
    description:
      "차용증이 없더라도 송금 경위, 반환 약속, 일부 변제 여부 등 여러 자료를 함께 살펴봅니다.",
    checks: ["송금일과 송금액", "반환 약속 내용", "문자·카카오톡·계좌내역"],
    field: "민사",
    articleTitle: "대여금 소송 차용증이 없을 때, 계좌이체·문자·카카오톡 증거 확인 방법",
    href: "https://blog.naver.com/lawoffice_mh/224325644574",
  },
  {
    title: "내용증명을 보내기 전인 경우",
    description:
      "내용증명은 나중에 자료로 남을 수 있으므로 문구와 요구 내용을 차분히 정리합니다.",
    checks: ["상대방에게 요구할 내용", "이미 오간 대화와 자료", "감정적 표현이나 단정적 표현 여부"],
    field: "민사",
    articleTitle: "내용증명을 보내기 전 조심해야 할 표현",
    href: "https://blog.naver.com/lawoffice_mh/224320043867",
  },
  {
    title: "보증금을 돌려받지 못한 경우",
    description:
      "보증금 반환 문제는 계약기간, 퇴거 여부, 반환 약속, 내용증명 필요성 등을 함께 확인합니다.",
    checks: ["임대차계약서", "퇴거일 또는 예정일", "보증금 반환 약속과 미반환 경위"],
    field: "민사",
    articleTitle: "임대차 보증금 반환 청구, 보증금을 돌려받지 못했을 때",
    href: "https://blog.naver.com/lawoffice_mh/224330645725",
  },
  {
    title: "계약이 깨져 계약금 문제가 생긴 경우",
    description:
      "계약금 문제는 계약 문구, 해제 사유, 실제 이행 정도, 상대방 귀책 여부를 함께 살펴봅니다.",
    checks: ["계약서 또는 약정 내용", "계약 해제·해지 경위", "계약금 반환 또는 몰취 주장 내용"],
    field: "민사",
    articleTitle: "계약금 반환 청구, 계약이 깨졌을 때 돌려받을 수 있을까",
    href: "https://blog.naver.com/lawoffice_mh/224330670027",
  },
  {
    title: "행정처분서를 받은 경우",
    description:
      "행정처분서는 날짜와 불복 기간 확인이 필요하므로, 처분서 원문을 기준으로 차분히 확인합니다.",
    checks: ["처분일과 송달일", "불복 기간", "처분 사유와 담당 기관"],
    field: "행정",
    articleTitle: "행정 사건 관련 글은 블로그에서 확인할 수 있습니다",
    href: blogUrl,
  },
  {
    title: "상속재산 문제를 논의해야 하는 경우",
    description:
      "상속재산이 모두 정리되지 않았더라도 가족관계와 알고 있는 재산·채무를 기준으로 먼저 상담할 수 있습니다.",
    checks: ["사망일과 가족관계", "알고 있는 재산과 채무", "상속인 사이의 기존 협의 내용"],
    field: "상속·가사",
    articleTitle: "상속·가사 관련 글은 블로그에서 확인할 수 있습니다",
    href: blogUrl,
  },
];

const preparationItems = [
  "언제부터 문제가 시작되었는지",
  "상대방과 어떤 관계인지",
  "받은 서류나 연락이 있는지",
  "정해진 기한이 있는지",
  "현재 가진 자료가 무엇인지",
  "원하는 방향이 무엇인지",
];

const relatedPages = [
  {
    title: "처음 오신 분께",
    description: "상담 전 준비할 자료와 방문 전 확인할 내용을 정리합니다.",
    href: "/first-visit",
  },
  {
    title: "상담 안내",
    description: "상담이 어떤 순서로 진행되는지 단계별 흐름을 확인합니다.",
    href: "/consultation",
  },
  {
    title: "업무 분야 보기",
    description: "형사, 민사, 상속·가사, 행정 분야별 안내를 확인합니다.",
    href: "/practice",
  },
  {
    title: "자주 묻는 질문",
    description: "상담 전에 자주 궁금해하는 질문을 차분히 살펴봅니다.",
    href: "/faq",
  },
  {
    title: "법률 실무 노트",
    description: "상담 전 자주 확인하는 절차와 자료 정리 기준을 살펴봅니다.",
    href: "/note",
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
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 whitespace-pre-line text-2xl font-semibold leading-tight text-primary md:text-background md:text-4xl md:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted md:text-[17px] md:font-medium md:leading-8 md:text-background/75">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function IssueCard({
  title,
  description,
  checks,
  field,
  articleTitle,
  href,
}: {
  title: string;
  description: string;
  checks: string[];
  field: string;
  articleTitle: string;
  href: string;
}) {
  return (
    <article className="flex min-h-[30rem] flex-col rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
      <p className="text-xs font-semibold tracking-[0.16em] text-accent md:text-sm">{field}</p>
      <h3 className="mt-3 text-xl font-semibold leading-8 text-primary md:text-2xl md:leading-9">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-primary/70 md:text-[15px] md:leading-7">
        {description}
      </p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-primary md:text-[15px]">먼저 확인할 것</p>
        <ul className="mt-3 space-y-2.5">
          {checks.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-7 text-primary/70 md:text-[15px]">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-md border border-[#e8ddcb] bg-white/65 p-4 md:border-accent/25">
        <p className="text-xs font-semibold tracking-[0.14em] text-accent">함께 볼 글</p>
        <p className="mt-2 text-sm font-semibold leading-6 text-primary md:text-[15px] md:leading-7">
          {articleTitle}
        </p>
      </div>

      <div className="mt-auto pt-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-semibold text-primary transition-colors hover:border-accent md:border-accent/35 md:bg-background/95 md:text-[15px]"
        >
          관련 글 보기
        </a>
      </div>
    </article>
  );
}

export default function IssuesPage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">
          Situational Issues
        </p>
        <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl md:leading-tight">
          상담에서 자주 정리하는 상황
        </h1>
        <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "법률문제는 분야명보다 현재 처한 상황에서 시작되는 경우가 많습니다. 아래 항목은 상담 전에 자주 확인하는 쟁점을 상황별로 정리한 것입니다."
          }
        </p>
        <p className="mt-5 max-w-3xl whitespace-pre-line leading-7 text-foreground/75 md:text-[17px] md:font-medium md:leading-8 md:text-background/78">
          {
            "각 상황은 실제 상담에서 먼저 확인하는 자료와 쟁점을 중심으로 정리했습니다. 구체적인 대응은 사건의 경위, 자료, 기한에 따라 달라질 수 있습니다."
          }
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
          <TextLink href="/consultation">상담 안내 보기</TextLink>
          <TextLink href="/note" variant="secondary">
            법률 실무 노트 보기
          </TextLink>
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading
            title="상황별로 먼저 확인할 것"
            description={
              "같은 분야의 사건이라도 현재 단계와 가진 자료에 따라 확인할 내용이 달라집니다.\n아래 카드는 상담 전 쟁점을 간단히 나누어 보기 위한 안내입니다."
            }
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {issueCards.map((card) => (
              <IssueCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="상담 전 정리"
            title="상담 전에 정리해 두면 좋은 것"
            description="상담에서는 결론을 먼저 단정하기보다, 사실관계와 자료를 나누어 확인하는 과정이 필요합니다."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {preparationItems.map((item, index) => (
              <div
                key={item}
                className="min-h-[76px] rounded-lg border border-[#e8ddcb] bg-white/60 px-5 py-4 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:px-6 md:py-5 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
              >
                <div className="flex h-full items-center gap-4">
                  <p className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-base font-semibold leading-snug text-primary">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <TextLink href="/consultation">상담 안내 보기</TextLink>
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading title="함께 확인할 페이지" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-lg border border-[#e8ddcb] bg-background p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] transition-colors hover:border-accent md:border-accent/25 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
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
        </div>
      </section>
    </div>
  );
}
