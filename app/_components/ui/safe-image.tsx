"use client";

import Image from "next/image";
import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export const SafeImage = ({ src, alt, width, height, className, priority }: SafeImageProps) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return null; // or a fallback component
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setImageError(true)}
    />
  );
};