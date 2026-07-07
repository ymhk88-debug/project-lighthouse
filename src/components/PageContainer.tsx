import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      {children}
    </section>
  );
}
