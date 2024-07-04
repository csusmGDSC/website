"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import Container from "@/components/ui/container";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";

const images = [
  "/images/test/workshop-test-1.jpg",
  "/images/test/workshop-test-2.jpg",
  "/images/test/workshop-test-3.jpg",
];

const Gallery = () => {
  return (
    <Container className="custom-max-width px-16 md:px-0">
      <Carousel
        opts={{ loop: true, containScroll: false }}
        plugins={[
          //@ts-ignore
          Autoplay({
            delay: 4000,
          }),
          //@ts-ignore
          Fade(),
        ]}
        className="custom-box-shadow"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative rounded-md overflow-hidden w-full h-[30rem]">
                <Image
                  src={image}
                  alt="CSUSM Communities"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover w-full h-full"
                />

                <div className="absolute bottom-0 left-0 w-full bg-neutral-200/50 backdrop-blur-sm">
                  <div className="p-4 w-full">
                    <h1 className="text-3xl font-bold text-neutral-800">
                      Why GDSC-CSUSM is the right choice
                    </h1>
                    <h2 className="text-xl text-primary">
                      Here, we channel our efforts to bring forth innovation
                      like no other.
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </Container>
  );
};

export default Gallery;
