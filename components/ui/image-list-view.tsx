import React from "react";
import { ScrollArea, ScrollBar } from "./scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import Image from "next/image";

interface ImageListViewProps {
  images: string[];
}

export const ImageListView = ({ images }: ImageListViewProps) => {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-2">
        {images.map((imageSrc) => {
          return (
            <Dialog key={imageSrc}>
              <DialogTrigger>
                <div className="w-[250px] overflow-hidden rounded-md custom-box-shadow">
                  <Image
                    src={`https://utfs.io/f/${imageSrc}`}
                    alt={"event-image"}
                    width="1920"
                    height="1080"
                    className="w-full h-full object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Extra Image</DialogTitle>
                <DialogDescription>
                  <Image
                    src={`https://utfs.io/f/${imageSrc}`}
                    alt={"event-image"}
                    width="1920"
                    height="1080"
                    className="w-full h-full object-cover rounded-md"
                  />
                </DialogDescription>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
