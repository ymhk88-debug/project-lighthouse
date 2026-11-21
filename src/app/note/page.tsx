import Link from "next/link";
import type { Metadata } from "next";
import { noteCategories, notePlaceholders, type NoteCategory } from "@/lib/notes";

export const metadata: Metadata = {
  title: "법률 실무 노트",
  description: "구성 확인용 예시 글 목록입니다. 발행된 글이 아닙니다.",
};

export default async function NotePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: rawCategory } = await searchParams;
  const category = noteCategories.includes(rawCategory as NoteCategory)
    ? (rawCategory as NoteCategory)
    : "전체";
  const notes =
    category === "전체" ? notePlaceholders : notePlaceholders.filter((note) => note.category === category);

  return (
    <div className="bg-background">
      <section className="mx-auto w-full max-w-[1160px] px-6 py-16 md:py-24">
        <p className="text-sm font-semibold tracking-[0.18em] text-accent md:text-[15px]">법률 실무 노트</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-primary md:text-[42px]">
          예시 글 목록입니다
        </h1>
        <p className="mt-6 max-w-[800px] text-base leading-8 text-muted md:text-[17px]">
          이 목록은 화면 구성을 보기 위한 자리입니다. 실제 글이 아닙니다. 이미 발행한 글은{" "}
          <a
            href="https://blog.naver.com/lawoffice_mh"
            className="font-semibold text-primary underline decoration-accent/50 underline-offset-4"
          >
            네이버 블로그
          </a>
          에서 볼 수 있습니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {noteCategories.map((item) => {
            const href = item === "전체" ? "/note" : `/note?category=${encodeURIComponent(item)}`;
            const selected = category === item;
            return (
              <Link
                key={item}
                href={href}
                aria-current={selected ? "page" : undefined}
                className={`inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold ${
                  selected
                    ? "bg-accent text-primary"
                    : "border border-primary/30 bg-white text-primary"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
        <ul className="mt-8 divide-y divide-border rounded-lg border border-accent bg-white/70">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link href={`/note/${note.slug}`} className="block px-6 py-5">
                <p className="text-xs font-semibold text-accent">예시 글 · {note.category}</p>
                <h2 className="mt-2 text-lg font-semibold text-primary">{note.title}</h2>
                <p className="mt-2 text-base leading-7 text-muted md:text-[17px]">{note.summary}</p>
                <time className="mt-2 block text-xs text-muted" dateTime={note.date}>
                  {note.date}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
