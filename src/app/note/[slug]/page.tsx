import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNote, notePlaceholders } from "@/lib/notes";

export function generateStaticParams() {
  return notePlaceholders.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "법률 실무 노트" };
  return { title: note.title, description: "구성 확인용 예시 글입니다. 발행된 글이 아닙니다." };
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <div className="bg-background">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold text-accent">예시 글 · 발행된 글이 아닙니다</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-primary md:text-[42px]">
          {note.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {note.category} · <time dateTime={note.date}>{note.date}</time>
        </p>
        <div className="mt-8 rounded-lg border border-accent bg-white/70 p-6 text-sm leading-8 text-primary md:text-[15px]">
          <p>{note.summary}</p>
          <p className="mt-4">
            이 페이지는 목록과 본문이 어떻게 이어지는지 보기 위한 자리입니다. 법률 조언이 아니며, 실제 사건의
            내용이 없습니다.
          </p>
        </div>
        <Link
          href="/note"
          className="mt-8 inline-flex text-sm font-semibold text-primary underline decoration-accent/50 underline-offset-4"
        >
          목록으로
        </Link>
      </article>
    </div>
  );
}
