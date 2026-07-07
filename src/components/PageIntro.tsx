type PageIntroProps = {
  title: string;
};

export function PageIntro({ title }: PageIntroProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        Project Lighthouse
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-lg text-muted">Placeholder Page</p>
    </div>
  );
}
