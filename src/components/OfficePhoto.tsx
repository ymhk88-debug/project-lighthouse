import Image from "next/image";

export function OfficePhoto({
  src,
  alt,
  ratio,
  sizes,
}: {
  src: string;
  alt: string;
  ratio: string;
  sizes: string;
}) {
  return (
    <div className="relative w-full overflow-hidden bg-[#e7e1d6]" style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill quality={90} sizes={sizes} className="object-cover" />
    </div>
  );
}
