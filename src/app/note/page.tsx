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

const topicClusters = [
  {
    title: "형사 초기대응",
    description:
      "경찰에서 연락을 받았거나 형사사건이 시작된 경우, 출석 일정을 정하기 전에 사건 지위와 기본 사실관계, 준비자료를 먼저 살펴봅니다.",
    posts: [
      {
        title: "경찰서 연락을 받았을 때 바로 출석해도 될까",
        description: "경찰 연락을 받은 직후 확인해야 할 기본 사항을 정리한 글입니다.",
        href: "https://blog.naver.com/lawoffice_mh/224312825362",
      },
      {
        title: "경찰조사 전 고소장 내용을 확인해야 하는 이유",
        description: "조사 전 어떤 사실관계가 문제되는지 확인하는 과정을 다룹니다.",
        href: "https://blog.naver.com/lawoffice_mh/224312902434",
      },
      {
        title: "경찰조사 전 변호사 상담이 필요한 경우",
        description: "조사 전 상담이 필요한 경우와 준비할 사항을 안내합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224313022205",
      },
      {
        title: "형사사건에서 변호사 상담 전 준비하면 좋은 자료",
        description: "상담 전에 정리해 두면 좋은 자료를 차분히 살펴봅니다.",
        href: "https://blog.naver.com/lawoffice_mh/224315791138",
      },
    ],
  },
  {
    title: "경찰조사·진술",
    description:
      "경찰조사에서는 진술 내용과 조서 확인이 중요합니다. 기억나는 부분과 모르는 부분을 나누고, 조서에 기재된 내용을 차분히 확인합니다.",
    posts: [
      {
        title: "피의자신문에서 가장 조심해야 할 진술",
        description: "진술 전 사실관계를 시간순으로 정리하는 이유를 안내합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224312956655",
      },
      {
        title: "경찰조사에서 조서 서명 전 확인할 것",
        description: "조서에 서명하기 전 확인할 부분을 살펴보는 글입니다.",
        href: "https://blog.naver.com/lawoffice_mh/224313003869",
      },
      {
        title: "경찰조사 출석 요구를 받았을 때 연기할 수 있을까",
        description: "출석 요구를 받은 경우 일정과 준비 상황을 함께 확인합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224313047148",
      },
      {
        title: "경찰조사에 변호사가 동석하면 무엇이 달라질까",
        description: "조사 동석의 의미와 조사 과정에서 확인할 사항을 안내합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224313063740",
      },
    ],
  },
  {
    title: "고소 대응·송치 이후",
    description:
      "고소를 당했거나 사건이 송치된 경우, 상대방과의 연락, 합의, 추가 자료 제출, 향후 절차를 차분히 확인합니다.",
    posts: [
      {
        title: "고소를 당했을 때 절대 먼저 하면 안 되는 행동",
        description: "고소 직후 성급한 연락을 피하고 상황을 정리하는 기준을 다룹니다.",
        href: "https://blog.naver.com/lawoffice_mh/224313362832",
      },
      {
        title: "형사사건에서 합의 연락을 받을 때 주의할 점",
        description: "합의 연락을 받을 때 문구와 방식, 처벌불원 의사 확인을 살펴봅니다.",
        href: "https://blog.naver.com/lawoffice_mh/224313375359",
      },
      {
        title: "경찰에서 검찰로 송치되면 무엇이 달라질까",
        description: "송치 이후 절차와 추가 자료 제출 가능성을 확인하는 글입니다.",
        href: "https://blog.naver.com/lawoffice_mh/224315771981",
      },
      {
        title: "불송치 결정 후 이의신청을 고민할 때 확인할 것",
        description: "불송치 결정 이후 검토할 절차와 자료를 정리합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224315766884",
      },
    ],
  },
  {
    title: "민사 초기대응",
    description:
      "민사분쟁은 받은 서류, 기한, 상대방 주장, 계약·거래 자료, 청구금액을 먼저 확인해야 방향을 잡을 수 있습니다.",
    posts: [
      {
        title: "민사소송 전 내용증명부터 보내야 할까",
        description: "소송 전 내용증명의 역할과 주의할 점을 안내합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224317565769",
      },
      {
        title: "민사소송 소장 받았을 때, 답변서 제출기한과 피고 대응 방법",
        description: "소장을 받은 경우 송달일과 답변서 제출기한을 확인합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224324287188",
      },
      {
        title: "지급명령과 민사소송 중 무엇을 선택해야 할까",
        description: "청구 방식 선택 전 자료와 상대방 대응 가능성을 검토합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224320267710",
      },
      {
        title: "민사소송 조정기일에 가기 전, 합의금·증거자료·주장 정리 방법",
        description: "조정기일 전 정리해야 할 주장과 자료를 살펴봅니다.",
        href: "https://blog.naver.com/lawoffice_mh/224324459854",
      },
    ],
  },
  {
    title: "대여금·미수금",
    description:
      "돈을 빌려주었거나 거래대금을 받지 못한 경우, 송금 내역만이 아니라 돈의 성격, 반환 약속, 일부 변제, 거래자료를 함께 확인합니다.",
    posts: [
      {
        title: "돈을 빌려줬는데 못 받을 때 먼저 확인할 것",
        description: "대여금 분쟁에서 먼저 확인할 자료와 쟁점을 안내합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224317722421",
      },
      {
        title: "대여금 소송 차용증이 없을 때, 계좌이체·문자·카카오톡 증거 확인 방법",
        description: "차용증이 없는 경우 다른 자료를 어떻게 살펴볼 수 있는지 다룹니다.",
        href: "https://blog.naver.com/lawoffice_mh/224325644574",
      },
      {
        title: "대여금 소송 계좌이체 내역만 있을 때, 빌려준 돈 입증 방법",
        description: "계좌이체 내역과 함께 송금 경위, 반환 약속을 확인합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224325696409",
      },
      {
        title: "공사대금·용역대금 못 받았을 때, 계약서·견적서·작업내역 증거 정리 방법",
        description: "계약서, 견적서, 작업내역 등 거래자료를 나누어 살펴봅니다.",
        status: "발행 URL 확인 후 연결 예정",
      },
      {
        title: "미수금 청구에서 거래명세서와 세금계산서가 중요한 이유",
        description: "거래명세서와 세금계산서가 어떤 자료로 쓰이는지 확인합니다.",
        status: "발행 URL 확인 후 연결 예정",
      },
    ],
  },
  {
    title: "내용증명·지급명령",
    description:
      "내용증명과 지급명령은 초기에 검토되는 절차입니다. 문구와 자료, 상대방의 대응 가능성을 함께 확인합니다.",
    posts: [
      {
        title: "내용증명을 보내기 전 조심해야 할 표현",
        description: "내용증명 작성 시 감정적 표현이나 단정적 표현에 주의하는 기준을 다룹니다.",
        href: "https://blog.naver.com/lawoffice_mh/224320043867",
      },
      {
        title: "지급명령과 민사소송 중 무엇을 선택해야 할까",
        description: "지급명령과 소송 선택 전 청구금액, 증거, 상대방 이의 가능성을 확인합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224320267710",
      },
      {
        title: "계약서를 쓰지 않았을 때도 돈을 받을 수 있을까",
        description: "계약서가 없는 경우에도 다른 자료를 함께 살펴볼 수 있다는 글입니다.",
        href: "https://blog.naver.com/lawoffice_mh/224319904966",
      },
      {
        title: "가압류를 신청하기 전 준비해야 할 자료",
        description: "보전처분 검토 전 준비해야 할 자료를 안내합니다.",
        href: "https://blog.naver.com/lawoffice_mh/224319977367",
      },
    ],
  },
];

const internalLinks = [
  { href: "/faq", label: "자주 묻는 질문" },
  { href: "/issues", label: "상황별 안내" },
  { href: "/first-visit", label: "첫 방문 준비" },
  { href: "/consultation", label: "상담 안내" },
  { href: "/practice/criminal", label: "형사 업무" },
  { href: "/practice/civil", label: "민사 업무" },
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
        <SectionHeading
          title="주제별로 정리한 법률 실무 노트"
          description={
            "경찰 연락, 고소 대응, 소장 수령, 대여금, 내용증명처럼 실제 상담에서 자주 나오는 상황을 기준으로 관련 글을 묶어 두었습니다.\n글은 일반적인 안내이므로, 실제 사건에서는 구체적인 자료와 사실관계를 함께 확인해야 합니다."
          }
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {topicClusters.map((cluster, index) => (
            <article
              key={cluster.title}
              className="rounded-lg border border-[#e8ddcb] bg-white/60 p-5 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-6 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-7 text-primary md:text-xl md:leading-8">
                    {cluster.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">
                    {cluster.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {cluster.posts.map((post) => (
                  <div
                    key={post.title}
                    className="rounded-md border border-[#eadfce] bg-background/80 p-4 md:border-accent/20 md:bg-white/70"
                  >
                    <h4 className="text-base font-semibold leading-7 text-primary">
                      {post.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-primary/70">
                      {post.description}
                    </p>
                    {"href" in post ? (
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex text-sm font-semibold text-primary underline decoration-accent/45 underline-offset-4 transition-colors hover:text-accent"
                      >
                        블로그에서 보기
                      </a>
                    ) : (
                      <p className="mt-4 text-sm font-semibold text-accent">
                        {post.status}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-[#e8ddcb] bg-white/60 p-5 md:border-accent/25 md:bg-background/95 md:p-6">
          <h3 className="text-lg font-semibold text-primary">함께 보면 좋은 안내</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {internalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#e8ddcb] bg-background px-4 text-sm font-semibold text-primary transition-colors hover:border-accent md:border-accent/30"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading
            title="전체 글은 블로그에서 확인할 수 있습니다"
            description={
              "홈페이지에서는 법률 실무 노트의 방향과 주요 주제를 정리해두었습니다.\n실제 발행 글은 네이버 블로그에서 계속 업데이트하고 있습니다."
            }
          />
          <div className="mt-8">
            <TextLink href={blogUrl} external variant="secondary">
              네이버 블로그 바로가기
            </TextLink>
          </div>
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




