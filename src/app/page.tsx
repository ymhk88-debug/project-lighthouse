import Link from "next/link";
import { ProfileImage } from "@/components/ProfileImage";
import { officePhone } from "@/lib/contact";
import { notePlaceholders } from "@/lib/notes";

const situationCards = [
  "경찰서에서 연락을 받았습니다",
  "소장이나 지급명령을 받았습니다",
  "돈을 받지 못했습니다",
  "상속 문제로 가족과 다투고 있습니다",
];

const practiceAreas = [
  {
    title: "형사",
    description:
      "경찰 연락, 고소 대응, 조사, 송치 이후 절차처럼 초기에 확인할 쟁점을 정리합니다.",
    href: "/practice/criminal",
  },
  {
    title: "민사",
    description:
      "소장 수령, 지급명령, 대여금, 내용증명처럼 자료와 기한, 청구금액을 먼저 확인합니다.",
    href: "/practice/civil",
  },
  {
    title: "상속·가사",
    description:
      "상속재산, 상속인 범위, 가족 간 금전 문제, 이혼·양육 문제처럼 관계와 자료 확인이 함께 필요한 사안을 살펴봅니다.",
    href: "/practice/inheritance-family",
  },
  {
    title: "행정",
    description: "행정처분서, 처분일, 송달일, 불복 기간, 처분 사유를 먼저 확인합니다.",
    href: "/practice/administrative",
  },
];

const handlingSteps = [
  {
    title: "먼저 이야기를 듣습니다.",
    description:
      "의뢰인이 어떤 상황에서 지금 이 문제를 겪게 되었는지, 무엇이 가장 걱정되는지를 먼저 듣는 것부터 시작합니다.",
  },
  {
    title: "사실관계를 정리합니다.",
    description: "자료를 하나씩 확인하고, 쟁점을 정리하며, 무엇이 중요한지 함께 살펴봅니다.",
  },
  {
    title: "사건을 방치하지 않습니다.",
    description:
      "서면을 제출하고, 기일을 준비하고, 필요한 자료를 확인하는 과정까지 끝까지 신경 쓰겠습니다.",
  },
  {
    title: "결과보다 과정을 중요하게 생각합니다.",
    description: "결과를 장담하는 것은 변호사가 할 수 있는 약속이 아닙니다.",
  },
];

const faqItems = [
  {
    question: "자료가 전부 준비되지 않아도 상담이 가능한가요?",
    answer:
      "자료가 전부 준비되지 않아도 상담은 가능합니다. 현재 가지고 있는 자료를 기준으로 먼저 사실관계와 쟁점을 정리하고, 추가로 필요한 자료는 상담 과정에서 확인할 수 있습니다.",
  },
  {
    question: "상담 전에 사건을 시간순으로 정리해야 하나요?",
    answer:
      "시간순 정리는 상담에 도움이 됩니다. 정확한 문서 형식보다 언제, 누구와, 어떤 일이 있었는지를 간단히 정리하는 것이 중요합니다.",
  },
  {
    question: "상담에서는 어떤 방식으로 사건을 확인하나요?",
    answer:
      "상담에서는 현재 상황, 받은 서류와 기한, 사실관계, 자료, 쟁점, 대응 방향을 순서대로 확인합니다.",
  },
  {
    question: "상담 전에 블로그 글을 읽고 가면 도움이 되나요?",
    answer:
      "관련 글을 미리 읽으면 절차와 쟁점을 이해하는 데 도움이 될 수 있습니다. 다만 글은 일반적인 안내이므로 실제 사건에서는 자료와 구체적인 사실관계를 함께 확인해야 합니다.",
  },
];

const noteExamples = notePlaceholders.slice(0, 3);

const cardClass =
  "rounded-lg border border-accent bg-white p-5 shadow-[0_8px_24px_rgba(17,31,50,0.05)] md:p-6";

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="max-w-[800px]">
      <h2 className="text-[28px] font-semibold leading-tight text-primary md:text-4xl">
        <span className="gold-rule" />
        {title}
      </h2>
      {description ? (
        <p className="mt-4 whitespace-pre-line text-base leading-8 text-muted md:text-[17px]">{description}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-background">
      <section className="band-navy hero">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <p className="hero-line text-sm font-semibold tracking-[0.18em] text-accent">유민환법률사무소</p>
          <h1 className="hero-line mt-4 max-w-[820px] text-[42px] font-semibold leading-tight text-primary md:text-5xl">
            사실관계를 확인하고 대응 방향을 정리합니다.
          </h1>
          <p className="hero-line mt-5 max-w-[800px] text-base font-medium leading-8 text-primary md:text-[17px]">
            처음 상담부터 사건이 끝날 때까지 유민환 변호사가 직접 챙깁니다.
          </p>
          <div className="hero-line mt-8 flex flex-col gap-3 sm:flex-row md:gap-4">
            <a
              href={`tel:${officePhone}`}
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-primary shadow-[0_10px_24px_rgba(181,150,93,0.18)] transition-colors hover:bg-accent/90 md:h-12 md:px-7 md:text-base"
            >
              전화 상담 {officePhone}
            </a>
            <Link
              href="/consultation"
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#d4bc84] bg-transparent px-5 text-sm font-semibold text-background transition-colors hover:bg-white/10 md:h-12 md:px-7 md:text-base"
            >
              상담 안내
            </Link>
          </div>
        </div>
        <div className="w-full max-w-sm lg:justify-self-center" style={{ width: "100%", maxWidth: "380px" }}>
          <div className="w-full overflow-hidden rounded-lg border border-accent bg-white p-3 shadow-[0_12px_30px_rgba(17,31,50,0.08)]">
            <div
              className="relative w-full overflow-hidden rounded-md border border-accent/30 bg-[#f2eadc]"
              style={{ aspectRatio: "4 / 5", maxWidth: "378px", width: "100%" }}
            >
              <ProfileImage />
            </div>
            <div className="px-1 pt-4 pb-2">
              <p className="text-base font-semibold text-primary md:text-lg">유민환 변호사</p>
              <p className="mt-2 text-base leading-7 text-muted md:text-[17px]">
                결과를 장담하기보다,
                <br />
                과정에 충실하겠습니다.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-6 py-16 md:py-24">
        <SectionHeading title="지금 어떤 상황이신가요?" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {situationCards.map((item) => (
            <article key={item} className={`${cardClass} min-h-36`}>
              <p className="text-base font-semibold leading-7 text-primary md:text-lg">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-6 pb-16 md:pb-24">
        <SectionHeading title="주요 업무분야" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => (
            <Link key={area.href} href={area.href} className={`${cardClass} block`}>
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent" aria-hidden="true">
                {area.title.slice(0, 1)}
              </span>
              <h3 className="text-lg font-semibold text-primary md:text-xl">{area.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted md:text-[17px]">{area.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="band-navy">
        <div className="mx-auto grid max-w-[1160px] items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div className="max-w-[800px]">
            <p className="text-sm font-semibold tracking-[0.18em] text-accent">
              <span className="gold-rule" />
              우리의 원칙
            </p>
            <h2 className="mt-4 text-[28px] font-semibold leading-tight text-primary md:text-4xl">
              결과를 장담하지 않습니다.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted md:text-[17px]">
              상담에서는 결론을 먼저 단정하기보다, 사실관계와 자료를 나누어 확인하면서 필요한 대응 방향을
              검토합니다.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-accent/40">
            <img
              src="/office/office-meeting-room.jpg"
              alt="유리벽 안의 상담 테이블과 창밖으로 보이는 산과 도시"
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-6 py-16 md:py-24">
        <SectionHeading title="사건을 다루는 방식" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {handlingSteps.map((step, index) => (
            <article key={step.title} className={cardClass}>
              <p className="gold-num">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-semibold leading-7 text-primary">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted md:text-[17px]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-6 pb-16 md:pb-24">
        <SectionHeading
          title="법률 실무 노트"
          description="이 목록은 화면 구성을 보기 위한 자리입니다. 실제 글이 아닙니다."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {noteExamples.map((note) => (
            <Link key={note.slug} href={`/note/${note.slug}`} className={`${cardClass} block`}>
              <p className="text-xs font-semibold text-accent">예시 글 · {note.category}</p>
              <h3 className="mt-3 text-lg font-semibold leading-7 text-primary">{note.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted md:text-[17px]">{note.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-6 pb-16 md:pb-24">
        <SectionHeading title="자주 묻는 질문" />
        <div className="mt-8 divide-y divide-accent/40 rounded-lg border border-accent bg-white">
          {faqItems.map((item) => (
            <article key={item.question} className="p-5 md:p-6">
              <h3 className="text-base font-semibold leading-7 text-primary md:text-[17px]">{item.question}</h3>
              <p className="mt-3 text-base leading-7 text-muted md:text-[17px]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1160px] rounded-lg bg-primary px-6 py-12 text-background md:border md:border-accent/40 md:px-10">
          <h2 className="max-w-[800px] text-3xl font-semibold leading-tight md:text-4xl">
            상담은 현재 상황을 정리하는 과정입니다.
          </h2>
          <p className="mt-5 max-w-[800px] text-base leading-8 text-background/80 md:text-[17px]">
            사건을 바로 맡기기 위한 시간이 아니라, 지금 어떤 문제가 있고 무엇을 먼저 해야 하는지 함께
            확인하는 시간입니다.
          </p>
          <div className="mt-8">
            <Link
              href="/consultation"
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-primary shadow-[0_10px_24px_rgba(181,150,93,0.18)] transition-colors hover:bg-accent/90 md:h-12 md:px-7 md:text-base"
            >
              상담 안내 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
