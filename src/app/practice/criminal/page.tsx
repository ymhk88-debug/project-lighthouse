import Link from "next/link";

const blogUrl = "https://blog.naver.com/lawoffice_mh";

const firstCheckItems = [
  {
    title: "현재 사건 단계",
    description: "경찰 연락을 받은 단계인지, 고소장을 준비하는 단계인지, 이미 조사를 받은 뒤인지 먼저 확인합니다.",
  },
  {
    title: "본인의 지위",
    description: "피해자인지, 피의자인지, 참고인인지에 따라 준비해야 할 자료와 진술 방향이 달라질 수 있습니다.",
  },
  {
    title: "조사 또는 제출 기한",
    description: "출석일, 의견서 제출 기한, 보완 요청 등 기한이 있는 경우 먼저 확인해야 합니다.",
  },
  {
    title: "확보 가능한 자료",
    description: "문자, 카카오톡, 통화녹음, CCTV, 계좌내역 등 사건의 흐름을 확인할 자료를 정리합니다.",
  },
];

const situationCards = [
  {
    label: "경찰조사",
    title: "경찰에서 출석 연락을 받은 경우",
    description: "사건명, 출석 요구 일정, 본인의 지위, 조사 전 확인할 자료를 먼저 정리합니다.",
  },
  {
    label: "고소대응",
    title: "고소를 당했거나 고소장을 받은 경우",
    description: "상대방의 주장, 사실관계, 반박자료, 조사 전 진술 방향을 나누어 검토합니다.",
  },
  {
    label: "피해자대리",
    title: "피해자로 고소를 준비하는 경우",
    description: "사건 경위, 증거자료, 상대방과의 관계, 피해 내용을 시간순으로 정리합니다.",
  },
  {
    label: "합의",
    title: "합의나 처벌불원을 검토하는 경우",
    description: "합의 시점, 합의서 문구, 처벌불원 의사 표시, 향후 절차를 함께 확인합니다.",
  },
  {
    label: "명예훼손·모욕",
    title: "말이나 글로 문제가 된 경우",
    description: "게시글, 댓글, 메시지, 전달 경위, 상대방 특정 가능성을 함께 살펴봅니다.",
  },
  {
    label: "스토킹·협박",
    title: "반복 연락이나 위협이 문제 된 경우",
    description: "연락 횟수, 내용, 시간대, 상대방의 반응, 신고 또는 경고 이력을 정리합니다.",
  },
];

const accusedChecklist = [
  "경찰 연락 내용과 출석 요구 일정",
  "본인이 어떤 지위로 조사를 받는지",
  "상대방 주장 중 인정할 부분과 다툴 부분",
  "문자, 카카오톡, 통화녹음 등 객관 자료",
  "사건 전후의 시간순 경위",
  "합의 가능성 또는 연락 여부",
  "기존 진술이나 제출자료가 있는지",
];

const victimChecklist = [
  "사건 발생 일시와 장소",
  "상대방과의 관계",
  "피해 내용과 이후 경과",
  "문자, 카카오톡, 통화녹음, 사진, 진단서 등 자료",
  "신고 또는 상담 이력",
  "합의 제안이나 연락 내역",
  "원하는 진행 방향",
];

const preparationCards = [
  {
    label: "연락·통지",
    title: "수사기관 연락 자료",
    items: ["경찰 연락 문자", "출석요구 일정", "사건번호가 적힌 문서", "담당 수사관 연락처"],
  },
  {
    label: "사실관계",
    title: "사건 경위 정리",
    items: ["사건 발생 일시", "사건 발생 장소", "상대방과의 관계", "사건 전후 대화 내용"],
  },
  {
    label: "증거자료",
    title: "객관 자료",
    items: ["문자와 카카오톡", "통화녹음", "사진 또는 영상", "계좌이체 내역", "진단서 또는 영수증"],
  },
  {
    label: "진행상황",
    title: "기존 진행 자료",
    items: ["고소장 또는 진정서", "이미 제출한 의견서", "조사받은 내용", "합의 관련 자료"],
  },
];

const criminalProcessSteps = [
  {
    title: "경찰 연락 또는 고소 사실 확인",
    description:
      "어떤 기관에서 연락이 왔는지, 고소 사실을 어떻게 알게 되었는지 먼저 확인합니다. 사건명과 연락 경위, 출석 요구 여부를 함께 정리합니다.",
    articleTitle: "경찰서 연락을 받았을 때 바로 출석해도 될까",
    href: "https://blog.naver.com/lawoffice_mh/224312825362",
  },
  {
    title: "사건 지위 확인",
    description:
      "피의자, 피해자, 참고인 중 어떤 지위인지에 따라 준비할 자료와 진술 방향이 달라질 수 있습니다. 조사 전에는 고소장 내용과 현재 단계를 나누어 봅니다.",
    articleTitle: "경찰조사 전 고소장 내용을 확인해야 하는 이유",
    href: "https://blog.naver.com/lawoffice_mh/224312902434",
  },
  {
    title: "사실관계 시간순 정리",
    description:
      "사건 발생 전후의 대화, 송금, 이동, 연락 내용을 시간순으로 정리합니다. 기억에 의존한 설명과 객관 자료를 구분해 살펴봅니다.",
    articleTitle: "형사사건에서 변호사 상담 전 준비하면 좋은 자료",
    href: "https://blog.naver.com/lawoffice_mh/224315791138",
  },
  {
    title: "경찰조사 준비",
    description:
      "조사에서 설명할 부분과 다툴 부분을 미리 나누어 봅니다. 진술 전에 사건 경위와 자료를 함께 확인하는 과정이 필요합니다.",
    articleTitle: "피의자신문에서 가장 조심해야 할 진술",
    href: "https://blog.naver.com/lawoffice_mh/224312956655",
  },
  {
    title: "조서 확인과 진술 정리",
    description:
      "조사가 끝난 뒤 조서 내용이 실제 진술 취지와 맞는지 확인합니다. 서명 전에는 표현과 누락된 내용을 차분히 살펴봅니다.",
    articleTitle: "경찰조사에서 조서 서명 전 확인할 것",
    href: "https://blog.naver.com/lawoffice_mh/224313003869",
  },
  {
    title: "검찰 송치 여부 확인",
    description:
      "경찰 단계 이후 사건이 검찰로 넘어가는지, 불송치로 정리되는지 확인합니다. 단계가 바뀌면 제출할 자료와 의견 정리 방식도 달라질 수 있습니다.",
    articleTitle: "경찰에서 검찰로 송치되면 무엇이 달라질까",
    href: "https://blog.naver.com/lawoffice_mh/224315771981",
  },
  {
    title: "재판 또는 불송치 이후 절차 확인",
    description:
      "재판이 시작되는 경우 공판기일과 준비자료를 확인하고, 불송치 이후에는 이의신청 가능성과 필요한 자료를 검토합니다.",
    articleTitle: "형사재판 첫 공판기일 전 준비해야 할 것",
    href: "https://blog.naver.com/lawoffice_mh/224315786088",
  },
];

const relatedPages = [
  { title: "처음 오신 분께", href: "/first-visit" },
  { title: "상담 안내 보기", href: "/consultation" },
  { title: "상황별 쟁점 보기", href: "/issues" },
  { title: "법률 실무 노트", href: "/note" },
];

const noteCards = [
  {
    label: "형사 초기대응",
    title: "경찰서 연락을 받았을 때 바로 출석해도 될까",
    description: "조사 전 확인할 자료와 출석 전 정리해야 할 내용을 먼저 살펴봅니다.",
    href: "https://blog.naver.com/lawoffice_mh/224312825362",
  },
  {
    label: "경찰조사",
    title: "경찰 조사 전에 진술 내용을 정리해야 하는 이유",
    description: "사건 경위, 기억나는 내용, 객관 자료를 나누어 확인하는 기준을 정리합니다.",
    href: "https://blog.naver.com/lawoffice_mh/224312956655",
  },
  {
    label: "고소 준비",
    title: "고소장을 제출하기 전 준비해야 할 자료",
    description: "사건 발생 일시, 상대방과의 관계, 증거자료를 시간순으로 정리하는 방법을 살펴봅니다.",
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

export default function CriminalPracticePage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">Criminal Practice</p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          형사 사건
        </h1>
        <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "경찰 연락을 받았을 때부터 조사, 고소, 합의, 재판까지 형사 사건은 초기 대응의 방향이 중요합니다.\n상담에서는 먼저 사건의 경위와 자료를 정리하고, 현재 단계에서 필요한 대응을 함께 확인합니다."
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
            title="형사 사건에서 먼저 확인하는 것"
            description="형사 사건은 같은 사건처럼 보여도, 조사 단계인지 고소 준비 단계인지, 피해자인지 피의자인지에 따라 확인할 내용이 달라집니다."
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
          title="자주 상담하는 형사 사건 상황"
          description="상담에서는 사건명을 단정하기보다, 먼저 실제로 어떤 일이 있었는지와 남아 있는 자료를 함께 확인합니다."
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
            title="피의자·피고인 입장에서 정리할 것"
            description="조사를 앞둔 경우에는 먼저 사실관계와 자료를 나누어 보고, 기억에 의존한 설명과 객관 자료를 구분해 정리하는 것이 필요합니다."
            items={accusedChecklist}
          />
          <ChecklistCard
            title="피해자 입장에서 정리할 것"
            description="피해자로 고소를 준비하거나 조사를 앞둔 경우에는 피해 사실을 시간순으로 정리하고, 이를 뒷받침할 자료를 함께 확인하는 과정이 필요합니다."
            items={victimChecklist}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <SectionHeading
          title="형사사건은 보통 이렇게 흐릅니다"
          description={
            "형사사건은 경찰 연락이나 고소 사실을 확인하는 단계부터 조사, 송치, 재판 또는 불송치 이후 절차까지 이어질 수 있습니다.\n현재 어느 단계에 있는지와 가지고 있는 자료를 먼저 나누어 보면 대응 방향을 더 차분히 검토할 수 있습니다."
          }
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {criminalProcessSteps.map((step, index) => (
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
            "자료를 모두 갖추지 못해도 상담은 가능합니다.\n다만 가지고 있는 자료를 미리 정리해 오시면 사건의 흐름을 더 차분히 확인할 수 있습니다."
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
            description="형사 사건 초기 대응과 조사 준비에 관해 블로그에 정리한 글을 함께 참고할 수 있습니다."
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
            형사 사건은 초기 대응 전에 사실관계부터 정리해야 합니다
          </h2>
          <p className="mt-5 max-w-3xl whitespace-pre-line leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            {
              "경찰 연락을 받았거나 고소를 준비하고 있다면, 현재 단계와 가지고 있는 자료를 먼저 확인하는 것이 필요합니다.\n글만으로 정리되지 않는 부분은 상담에서 함께 확인하겠습니다."
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
