type PageIntroProps = {
  title: string;
};

export function PageIntro({ title }: PageIntroProps) {
  return (
    <div className="max-w-2xl">
      <h1 className="font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
        {title}
      </h1>
    </div>
  );
}
