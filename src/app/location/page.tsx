import Link from "next/link";

const address = "창원시 성산구 용지로169번길 7, 12층";
const officePhone = "055-263-5882";
const mobilePhone = "050-5948-5158";
const naverMapUrl =
  "https://map.naver.com/p/search/%EB%B3%80%ED%98%B8%EC%82%AC%20%EC%9C%A0%EB%AF%BC%ED%99%98%20%EB%B2%95%EB%A5%A0%EC%82%AC%EB%AC%B4%EC%86%8C/place/2076772014?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607011737%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EB%B3%80%ED%98%B8%EC%82%AC%20%EC%9C%A0%EB%AF%BC%ED%99%98%20%EB%B2%95%EB%A5%A0%EC%82%AC%EB%AC%B4%EC%86%8C";
const naverMapEmbedUrl = "";

const visitChecklist = [
  {
    title: "상담 일정 조율",
    description:
      "방문 상담은 사전 일정 조율 후 진행됩니다. 방문 전 전화로 일정을 확인해 주세요.",
  },
  {
    title: "자료 준비",
    description:
      "계약서, 문자·카카오톡 대화, 입금 내역, 고소장, 소장, 통지서 등 사건과 관련된 자료를 함께 준비해 주세요.",
  },
  {
    title: "사건 흐름 정리",
    description:
      "언제, 누구와, 어떤 일이 있었는지 시간 순서로 정리해 오시면 상담을 더 정확하게 진행할 수 있습니다.",
  },
];

const transitItems = [
  {
    title: "자가용",
    description: "방문 전 주소와 주차 가능 여부를 함께 확인해 주세요.",
  },
  {
    title: "대중교통",
    description:
      "가까운 정류장 또는 역에서의 이동 경로는 지도 앱을 통해 확인하실 수 있습니다.",
  },
  {
    title: "주차",
    description:
      "주차 가능 여부와 이용 방법은 상담 일정 조율 과정에서 함께 안내드립니다.",
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

export default function LocationPage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">Location</p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-background md:text-6xl">
          오시는 길
        </h1>
        <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "방문 상담은 사건을 차분히 정리하기 위한 시간입니다.\n일정을 조율하고 관련 자료를 준비해 오시면, 사실관계와 절차를 더 정확하게 함께 확인할 수 있습니다."
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
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            title="사무실 위치"
            description={
              "방문 상담은 사전 일정 조율 후 진행됩니다.\n법원이나 수사기관 기일, 외부 일정으로 자리를 비울 수 있으므로 방문 전 전화로 일정을 확인해 주세요."
            }
          />
          <div className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-7 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
            <p className="text-sm font-semibold text-primary md:text-lg">사무실 주소</p>
            <p className="mt-4 text-base font-semibold leading-8 text-primary">
              {address}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">
              서류를 가지고 오시는 경우, 받은 서류와 관련 자료를 가능한
              범위에서 함께 준비해 오시면 좋습니다.
            </p>
            <div className="mt-6 rounded-md border border-border bg-background/60 p-4">
              <p className="text-sm font-semibold text-primary md:text-lg">상담 문의</p>
              <p className="mt-2 text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">
                사무실{" "}
                <a
                  href={`tel:${officePhone}`}
                  className="transition-colors hover:text-accent"
                >
                  {officePhone}
                </a>
              </p>
              <p className="text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">
                휴대폰{" "}
                <a
                  href={`tel:${mobilePhone}`}
                  className="transition-colors hover:text-accent"
                >
                  {mobilePhone}
                </a>
              </p>
              <p className="mt-3 text-sm leading-7 text-primary/70 md:text-[15px]">
                방문 전 전화로 상담 일정과 준비자료를 함께 확인해 주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            title="지도 확인"
            description={
              "네이버지도를 통해 사무실 위치를 확인하실 수 있습니다.\n방문 상담은 사전 일정 조율 후 진행되므로, 방문 전 전화로 일정을 확인해 주세요."
            }
          />
          <div className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-7 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
            {naverMapEmbedUrl ? (
              <div className="overflow-hidden rounded-md border border-border bg-background/60">
                <iframe
                  title="유민환 변호사 사무실 위치"
                  src={naverMapEmbedUrl}
                  className="h-[320px] w-full md:h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div className="flex min-h-52 flex-col items-center justify-center rounded-md border border-dashed border-border bg-background/60 px-6 text-center">
                <p className="text-sm leading-7 text-primary/70 md:text-[15px] md:leading-7">
                  사무실 위치는 네이버지도에서 확인하실 수 있습니다.
                  <br />
                  정확한 길 안내는 네이버지도에서 크게 보기를 이용해 주세요.
                </p>
              </div>
            )}
            <div className="mt-6 flex justify-center">
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-background transition-colors hover:bg-primary/90 md:h-12 md:px-7 md:bg-accent md:text-primary md:shadow-[0_10px_24px_rgba(184,155,94,0.16)]"
              >
                네이버지도에서 크게 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-12">
          <SectionHeading title="방문 전 확인하면 좋은 것" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {visitChecklist.map((item, index) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
              >
                <p className="text-xs font-semibold text-accent md:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-primary md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-12">
        <SectionHeading title="교통 및 주차 안내" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {transitItems.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]"
            >
              <h3 className="text-lg font-semibold text-primary md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted md:text-[15px] md:leading-7 md:text-primary/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:py-12">
        <div className="mx-auto max-w-7xl rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/30 md:px-10">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            방문 전 사건의 흐름을 먼저 정리해 주세요
          </h2>
          <p className="mt-5 max-w-3xl whitespace-pre-line leading-7 text-background/75 md:text-[17px] md:font-medium md:leading-8">
            {
              "상담에서는 단순한 결론만 확인하는 것이 아니라, 자료와 사실관계를 함께 정리하면서 필요한 대응 방향을 검토합니다.\n방문 전 상담 절차와 준비자료를 확인하시면 더 차분하게 상담을 준비할 수 있습니다."
            }
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
            <Link
              href="/consultation"
              className="inline-flex h-11 items-center justify-center rounded-md bg-background px-5 text-sm font-semibold text-primary transition-colors hover:bg-background/90 md:h-12 md:px-7 md:text-base"
            >
              상담 안내 보기
            </Link>
            <Link
              href="/note"
              className="inline-flex h-11 items-center justify-center rounded-md border border-background/25 px-5 text-sm font-semibold text-background transition-colors hover:border-accent hover:text-accent md:h-12 md:px-7 md:text-base"
            >
              법률 실무 노트 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




