export const noteCategories = ["전체", "형사", "민사", "상속·가사", "행정"] as const;

export type NoteCategory = (typeof noteCategories)[number];

export type NotePlaceholder = {
  slug: string;
  category: Exclude<NoteCategory, "전체">;
  title: string;
  summary: string;
  date: string;
};

export const notePlaceholders: NotePlaceholder[] = [
  {
    slug: "example-criminal-note",
    category: "형사",
    title: "예시 글 — 형사 절차에서 먼저 볼 서류",
    summary: "예시 문장입니다. 발행된 글이 아닙니다.",
    date: "2026-11-19",
  },
  {
    slug: "example-civil-note",
    category: "민사",
    title: "예시 글 — 소장을 받은 뒤 확인할 기한",
    summary: "예시 문장입니다. 발행된 글이 아닙니다.",
    date: "2026-11-19",
  },
  {
    slug: "example-family-note",
    category: "상속·가사",
    title: "예시 글 — 상속 상담 전에 모을 자료",
    summary: "예시 문장입니다. 발행된 글이 아닙니다.",
    date: "2026-11-19",
  },
  {
    slug: "example-admin-note",
    category: "행정",
    title: "예시 글 — 처분서를 받은 뒤의 기한",
    summary: "예시 문장입니다. 발행된 글이 아닙니다.",
    date: "2026-11-19",
  },
];

export function getNote(slug: string) {
  return notePlaceholders.find((note) => note.slug === slug);
}
