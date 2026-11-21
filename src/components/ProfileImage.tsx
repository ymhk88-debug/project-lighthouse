"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileImage() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full items-center justify-center px-8 text-center">
        <p className="text-base leading-7 text-muted md:text-[17px]">
          프로필 사진 영역
          <br />
          public/profile-arms-crossed.jpg
        </p>
      </div>
    );
  }

  return (
    <Image
      src="/profile-arms-crossed.jpg"
      alt="유민환 변호사 프로필 사진"
      fill
      quality={90}
      sizes="(min-width: 1024px) 360px, 320px"
      className="object-cover [object-position:50%_10%]"
      preload
      onError={() => setHasError(true)}
    />
  );
}
