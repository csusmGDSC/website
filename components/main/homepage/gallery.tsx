"use client";

import Container from "@/components/ui/container";
import React from "react";
import BlurFade from "@/components/ui/magicui/blur-fade";
import { cn } from "@/lib/utils";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

const Gallery = () => {
  return (
    <Container
      className="custom-max-width px-16 md:px-0 mt-10"
      heading="Join a Community"
      subheading="Be apart of something special"
    >
      <section id="photos">
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img
                className={cn(
                  "mb-4 size-full rounded-lg object-contain custom-box-shadow opacity-85"
                )}
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Gallery;
