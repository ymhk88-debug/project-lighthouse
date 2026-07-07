const officePhone = "055-263-5882";
const mobilePhone = "050-5948-5158";

const policySections = [
  {
    title: "개인정보의 처리 목적",
    description:
      "이 홈페이지는 유민환 변호사의 업무 방식, 상담 안내, 업무 분야, 오시는 길, 법률 실무 노트 정보를 제공하기 위한 목적으로 운영됩니다.\n현재 홈페이지 자체에서는 이름, 연락처, 사건 내용 등을 입력받는 온라인 문의폼이나 예약 기능을 제공하지 않습니다.",
  },
  {
    title: "수집하는 개인정보 항목",
    description:
      "현재 홈페이지에는 방문자가 직접 개인정보를 입력하는 기능이 없습니다.\n다만 방문자가 전화, 문자, 외부 블로그, 지도 서비스 등 홈페이지 밖의 수단을 통해 연락하는 경우, 해당 연락 과정에서 제공한 정보는 상담 일정 조율 및 사건 검토를 위해 확인될 수 있습니다.",
  },
  {
    title: "개인정보의 보유 및 이용 기간",
    description:
      "전화나 문자 등으로 제공된 정보는 상담 진행 여부, 사건 수임 여부, 법령상 보관 필요성 등을 고려하여 필요한 범위에서 보관될 수 있습니다.\n사건 수임이 이루어지는 경우 관련 정보는 변호사 직무 수행 및 법령상 의무에 따라 관리됩니다.",
  },
  {
    title: "개인정보의 제3자 제공",
    description:
      "제공받은 개인정보는 원칙적으로 본인의 동의 없이 제3자에게 제공하지 않습니다.\n다만 법령에 근거가 있거나, 상담 또는 사건 처리를 위해 필요한 범위에서 별도 동의를 받은 경우에는 예외가 있을 수 있습니다.",
  },
  {
    title: "외부 링크에 대한 안내",
    description:
      "이 홈페이지에는 네이버 블로그, 네이버지도 등 외부 서비스로 연결되는 링크가 포함될 수 있습니다.\n외부 서비스 이용 과정에서 처리되는 개인정보는 해당 서비스의 개인정보처리방침이 적용될 수 있습니다.",
  },
  {
    title: "개인정보 보호를 위한 조치",
    description:
      "상담 또는 사건 검토 과정에서 확인되는 개인정보와 사건 관련 자료는 변호사 직무상 비밀유지 의무와 관련 법령에 따라 신중하게 관리됩니다.\n홈페이지 운영 과정에서도 불필요한 개인정보 수집을 최소화하는 방향을 유지합니다.",
  },
  {
    title: "향후 기능 추가에 따른 변경",
    description:
      "향후 온라인 문의폼, 예약 기능, 방문자 분석 도구, 자료 업로드 기능 등이 추가되는 경우, 수집 항목과 이용 목적, 보유 기간 등을 반영하여 개인정보처리방침을 개정할 수 있습니다.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">
          Privacy Policy
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-6xl md:text-background">
          개인정보처리방침
        </h1>
        <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
          {
            "유민환 변호사 홈페이지는 방문자의 개인정보를 신중하게 다루기 위해 필요한 기준을 정리합니다.\n현재 홈페이지는 전화 문의와 외부 링크 중심의 정적 안내형 홈페이지이며, 온라인 문의폼이나 자료 업로드 기능은 운영하지 않습니다."
          }
        </p>
      </section>

      <section className="border-y border-border bg-white/35 md:border-accent/15 md:bg-primary">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-12">
          <article className="rounded-lg border border-[#e8ddcb] bg-white/70 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-8 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
            <div className="space-y-8">
              {policySections.map((section, index) => (
                <section
                  key={section.title}
                  className="border-b border-border pb-8 last:border-b-0 last:pb-0"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-accent md:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold leading-8 text-primary md:text-2xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-primary/70 md:text-[15px] md:leading-8">
                    {section.description}
                  </p>
                </section>
              ))}

              <section className="border-b border-border pb-8">
                <p className="text-xs font-semibold tracking-[0.16em] text-accent md:text-sm">
                  08
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-8 text-primary md:text-2xl">
                  문의
                </h2>
                <p className="mt-3 text-sm leading-7 text-primary/70 md:text-[15px] md:leading-8">
                  개인정보처리방침과 관련한 문의는 아래 연락처를 통해 확인할 수
                  있습니다.
                </p>
                <div className="mt-5 rounded-md border border-border bg-background/60 p-4">
                  <p className="text-sm leading-7 text-primary/75 md:text-[15px]">
                    사무실{" "}
                    <a
                      href={`tel:${officePhone}`}
                      className="font-semibold text-primary transition-colors hover:text-accent"
                    >
                      {officePhone}
                    </a>
                  </p>
                  <p className="text-sm leading-7 text-primary/75 md:text-[15px]">
                    휴대폰{" "}
                    <a
                      href={`tel:${mobilePhone}`}
                      className="font-semibold text-primary transition-colors hover:text-accent"
                    >
                      {mobilePhone}
                    </a>
                  </p>
                </div>
              </section>

              <p className="text-sm font-semibold text-primary md:text-[15px]">
                시행일: 2026년 7월 4일
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
