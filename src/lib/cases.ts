export const caseFields = ["전체", "형사", "민사", "상속·가사", "행정"] as const;

export type CaseField = (typeof caseFields)[number];

export type ExampleCase = {
  id: string;
  field: Exclude<CaseField, "전체">;
  outcome: string;
  title: string;
  summary: string;
  tags: string[];
  date: string;
};

export const exampleCases: ExampleCase[] = [
  {
    id: "example-criminal",
    field: "형사",
    outcome: "예시 요약: 조사 전에 확인할 자료를 정리한 경과를 이 칸에 적습니다.",
    title: "예시 제목 — 형사",
    summary: "예시 한 줄입니다. 실제 사건의 경과가 아닙니다.",
    tags: ["예시", "익명화 전"],
    date: "2026-11-19",
  },
  {
    id: "example-civil",
    field: "민사",
    outcome: "예시 요약: 청구와 자료를 나누어 본 경과를 이 칸에 적습니다.",
    title: "예시 제목 — 민사",
    summary: "예시 한 줄입니다. 실제 사건의 경과가 아닙니다.",
    tags: ["예시", "익명화 전"],
    date: "2026-11-19",
  },
  {
    id: "example-family",
    field: "상속·가사",
    outcome: "예시 요약: 가족관계와 재산 목록을 정리한 경과를 이 칸에 적습니다.",
    title: "예시 제목 — 상속·가사",
    summary: "예시 한 줄입니다. 실제 사건의 경과가 아닙니다.",
    tags: ["예시", "익명화 전"],
    date: "2026-11-19",
  },
  {
    id: "example-admin",
    field: "행정",
    outcome: "예시 요약: 처분 문서와 기한을 확인한 경과를 이 칸에 적습니다.",
    title: "예시 제목 — 행정",
    summary: "예시 한 줄입니다. 실제 사건의 경과가 아닙니다.",
    tags: ["예시", "익명화 전"],
    date: "2026-11-19",
  },
];
