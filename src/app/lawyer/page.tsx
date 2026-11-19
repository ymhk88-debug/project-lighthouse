import Image from "next/image";
import type { Metadata } from "next";
import { address, email, mobilePhone, officePhone } from "@/lib/contact";

export const metadata: Metadata = {
  title: "변호사 소개",
};

const qualifications = ["제9회 변호사시험 합격", "경남지방변호사회 소속"];

const career = [
  "2025. 3. ~ 현재 법률사무소 해결 파트너 변호사 (2025년 3월 개업)",
  "2023 ~ 2025 법무법인 와이케이 소속 변호사",
  "2022 ~ 2023 대한법률구조공단 부산동부출장소 공익법무관",
  "2020 ~ 2022 대한법률구조공단 창원지부 공익법무관",
];

const publicService = [
  "(현) 창원지방공소청 진주지청 피해자 국선변호사",
  "(현) 창원지방공소청 피해자 국선변호사",
  "(현) 창원지방법원 논스톱국선변호인",
  "(전) 창원지방법원 국선변호인",
];

const education = [
  "부산 부일외국어고등학교 졸업",
  "동아대학교 석당인재학부 졸업",
  "동아대학교 법학전문대학원 졸업",
];

function ProfileList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-sm font-semibold text-accent md:text-[15px]">{title}</h2>
      <ul className="mt-3 divide-y divide-border border-t border-border">
        {items.map((item) => (
          <li key={item} className="py-3 text-sm leading-6 text-primary md:text-[15px] md:leading-7">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function LawyerPage() {
  return (
    <div className="bg-background md:bg-primary">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:gap-12 md:py-24 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:items-start lg:gap-x-16">
        <div className="lg:col-start-2 lg:row-start-1">
          <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">변호사 소개</p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-5xl md:text-background">
            유민환 변호사
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-muted md:text-xl md:font-medium md:leading-9 md:text-background/75">
            창원에서 민사·형사 사건을 직접 상담하고 처리합니다. 의뢰인의 사정을 먼저 듣고, 가능한 방법과 한계를
            있는 그대로 설명드립니다.
          </p>
        </div>

        <div className="w-full max-w-[380px] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:max-w-none">
          <div className="overflow-hidden rounded-lg border border-[#e8ddcb] bg-white/40 p-3 shadow-[0_12px_30px_rgba(15,29,46,0.08)] md:border-accent/25 md:bg-background/95 md:shadow-[0_22px_50px_rgba(0,0,0,0.16)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-[#e7dcc8] bg-[#f2eadc] md:border-accent/20 lg:aspect-[2/3]">
              <Image
                src="/profile-tie.jpg"
                alt="유민환 변호사 소개 사진"
                fill
                quality={90}
                sizes="(min-width: 1024px) 360px, 320px"
                className="object-cover [object-position:46%_8%] lg:[object-position:center]"
                preload
              />
            </div>
            <div className="px-1 pt-4 pb-2">
              <p className="text-sm font-semibold text-primary md:text-lg">유민환 변호사</p>
              <p className="mt-2 text-sm leading-6 text-muted md:text-[15px] md:leading-7">
                결과를 장담하기보다,
                <br />
                과정에 충실하겠습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-start-2 lg:row-start-2">
          <div className="rounded-lg border border-[#e8ddcb] bg-white/60 p-6 shadow-[0_8px_24px_rgba(15,29,46,0.05)] md:border-accent/25 md:bg-background/95 md:p-7 md:shadow-[0_18px_45px_rgba(15,29,46,0.08)]">
            <div className="space-y-8">
              <ProfileList title="자격·소속" items={qualifications} />
              <ProfileList title="경력" items={career} />
              <ProfileList title="국선·공공 활동" items={publicService} />
              <ProfileList title="학력" items={education} />
              <section>
                <h2 className="text-sm font-semibold text-accent md:text-[15px]">연락처</h2>
                <dl className="mt-3 divide-y divide-border border-t border-border">
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 text-sm leading-6 text-primary md:text-[15px] md:leading-7">
                    <dt>사무실</dt>
                    <dd>
                      <a href={`tel:${officePhone}`} className="transition-colors hover:text-accent">
                        {officePhone}
                      </a>
                    </dd>
                  </div>
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 text-sm leading-6 text-primary md:text-[15px] md:leading-7">
                    <dt>휴대폰</dt>
                    <dd>
                      <a href={`tel:${mobilePhone}`} className="transition-colors hover:text-accent">
                        {mobilePhone}
                      </a>
                    </dd>
                  </div>
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 text-sm leading-6 text-primary md:text-[15px] md:leading-7">
                    <dt>이메일</dt>
                    <dd>
                      <a href={`mailto:${email}`} className="transition-colors hover:text-accent">
                        {email}
                      </a>
                    </dd>
                  </div>
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 text-sm leading-6 text-primary md:text-[15px] md:leading-7">
                    <dt>주소</dt>
                    <dd>{address}</dd>
                  </div>
                </dl>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
