"use client";

import { useState } from "react";
import { caseFields, type CaseField, type ExampleCase } from "@/lib/cases";

export function CaseBoard({ cases }: { cases: ExampleCase[] }) {
  const [field, setField] = useState<CaseField>("전체");
  const visible = field === "전체" ? cases : cases.filter((item) => item.field === field);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="분야">
        {caseFields.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={field === item}
            onClick={() => setField(item)}
            className={`h-10 rounded-md px-4 text-sm font-semibold ${
              field === item ? "bg-primary text-background" : "border border-border bg-background text-primary"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-4">
        {visible.map((item) => (
          <li
            key={item.id}
            className="rounded-lg border border-accent bg-white/70 p-6"
          >
            <p className="text-sm font-semibold text-accent">예시 - 실제 사례 아님, 게시 전 의뢰인 서면동의·익명화 필요</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <span>{item.field}</span>
              <time dateTime={item.date}>{item.date}</time>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-primary">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-primary/80">{item.summary}</p>
            <p className="mt-3 text-base leading-7 text-muted md:text-[17px]">{item.outcome}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li key={tag} className="rounded-md border border-border px-2 py-1 text-xs text-primary">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
