"use client";

import Image from "next/image";
import React from "react";

interface AvatarProps {
  size?: number;
  imageSrc?: string | null;
}

/**
 * Compontent that shows circle image with a placeholder if image not given
 * @param {number} size Size of the image
 * @param {string} imageSrc URL or path of the image (Visit NextJS documentation if using URL)
 */
export default function Avatar({ size, imageSrc }: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      height={size || 100}
      width={size || 100}
      alt="Avatar"
      src={imageSrc || "/images/placeholder.jpg"}
    />
  );
}
