"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileImage() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full items-center justify-center px-8 text-center">
        <p className="text-sm leading-6 text-muted">
          프로필 사진 영역
          <br />
          public/profile-yuminhwan.png
        </p>
      </div>
    );
  }

  return (
    <Image
      src="/profile-yuminhwan.png"
      alt="유민환 변호사 프로필 사진"
      fill
      sizes="(min-width: 1024px) 378px, 100vw"
      className="scale-[1.015] object-cover"
      priority
      onError={() => setHasError(true)}
    />
  );
}
