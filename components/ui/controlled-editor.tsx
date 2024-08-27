import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Quill, { type QuillOptions } from "quill";

import "quill/dist/quill.snow.css";
import { Button } from "./shadcn/button";
import { PiTextAa } from "react-icons/pi";
import { ImageIcon, Smile, XIcon } from "lucide-react";
import { Hint } from "./hint";
import { Delta, Op } from "quill/core";
import { EmojiPopover } from "./emoji-popover";
import Image from "next/image";
import { Control, useController } from "react-hook-form";

type EditorValue = {
  images: File[] | null;
  body: string;
};

interface EditorProps {
  control?: Control<any>;
  placeholder?: string;
  defaultValue?: Delta | Op[];
  disabled?: boolean;
  imageLimit?: number;
}

/**
 * A CONTROLLED (NO SUBMIT) customizable text editor component with image upload capabilities.
 *
 * @param {EditorProps} props - The properties for the editor component.
 * @param {object} props.control - The form controller for controlled input.
 * @param {string} props.placeholder - The placeholder text for the editor.
 * @param {any[]} props.defaultValue - The default value for the editor.
 * @param {boolean} props.disabled - Whether the editor is disabled.
 * @param {number} props.imageLimit - The maximum number of images that can be uploaded.
 * @return {JSX.Element} The editor component.
 */
const Editor = ({
  control,
  placeholder = "Write something...",
  defaultValue = [],
  disabled = false,
  imageLimit = 5,
}: EditorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef(placeholder);
  const quillRef = useRef<Quill | null>(null);
  const defaultValueRef = useRef(defaultValue);
  const disabledRef = useRef(disabled);
  const imageElementRef = useRef<HTMLInputElement>(null);
  const imagesRef = useRef<File[]>([]);

  // Hiding editor toolbar on hide formatting enabled
  const [isToolbarVisible, setIsToolbarVisible] = useState(true);

  // Extra image sources if user wants to add additional images to event description
  const [imageSources, setImageSources] = useState<File[]>([]);

  // Form controller for controlled input
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name: "about",
    control,
    defaultValue: { images: [], body: JSON.stringify(defaultValue) },
  });

  useLayoutEffect(() => {
    placeholderRef.current = placeholder;
    defaultValueRef.current = defaultValue;
    disabledRef.current = disabled;
    imagesRef.current = imageSources;
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div")
    );

    const options: QuillOptions = {
      theme: "snow",
      placeholder: placeholderRef.current,
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["link"],
          [{ list: "ordered" }, { list: "bullet" }],
        ],
      },
    };

    const quill = new Quill(editorContainer, options);
    quillRef.current = quill;

    quill.setContents(defaultValueRef.current);
    onChange({
      images: imagesRef.current,
      body: JSON.stringify(quill.getContents()),
    });

    quill.on(Quill.events.TEXT_CHANGE, () => {
      onChange({
        images: imagesRef.current,
        body: JSON.stringify(quill.getContents()),
      });
    });

    if (value?.body) {
      quill.setContents(JSON.parse(value.body));
    }

    return () => {
      quill.off(Quill.events.TEXT_CHANGE);
      if (quillRef.current) {
        quillRef.current = null;
      }
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  const toggleToolbar = () => {
    setIsToolbarVisible(!isToolbarVisible);
    const toolbarElement = containerRef.current?.querySelector(".ql-toolbar");
    if (toolbarElement) {
      toolbarElement?.classList.toggle("hidden");
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImageSources([...imageSources!, file]);
      onChange({
        images: imageSources,
        body: JSON.stringify(quillRef.current?.getContents()),
      });
    }
  };

  const handleRemoveImage = (imageSrc: File) => {
    setImageSources(imageSources.filter((image) => image !== imageSrc));
    imageElementRef.current!.value = "";
    onChange({
      images: imageSources,
      body: JSON.stringify(quillRef.current?.getContents()),
    });
  };

  const onEmojiSelect = (emoji: any) => {
    const quill = quillRef.current;

    quill?.insertText(quill?.getSelection()?.index || 0, emoji.native);
  };

  return (
    <div className="flex flex-col">
      {/* IMAGE UPLOADER, HIDDEN BECAUSE DEFAULT IS UGLY */}
      <input
        type="file"
        accept="image/*"
        ref={imageElementRef}
        onChange={handleImageUpload}
        className="hidden"
      />

      <div className="flex flex-col border border-border rounded-md overflow-hidden focus-within:border-blue focus-within:shadow-sm transition bg-white">
        {/* THE ACTUAL QUILL EDITOR */}
        <div ref={containerRef} className="h-full ql-custom" />

        {imageSources && imageSources.length > 0 && (
          <div className="p-2">
            <div className="flex space-x-4">
              {imageSources.map((imageSrc, index) => (
                <div
                  key={index}
                  className="relative w-[62px] h-[62px] flex-shrink-0"
                >
                  <button
                    onClick={() => {
                      handleRemoveImage(imageSrc);
                    }}
                    className="group-hover:block rounded-full bg-black/70 hover:bg-black absolute -top-2.5 -right-2.5
                    text-white w-6 h-6 z-[4] border-2 border-white flex items-center justify-center transition-colors"
                  >
                    <XIcon className="w-3.5 h-3.5" />
                  </button>
                  <Image
                    src={URL.createObjectURL(imageSrc)}
                    alt="Uploaded"
                    fill
                    className="rounded-xl border object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex px-2 pb-2 z-[5]">
          <Hint
            label={!isToolbarVisible ? "Show Formatting" : "Hide Formatting"}
          >
            <Button
              disabled={disabled}
              size="sm"
              variant="ghost"
              onClick={toggleToolbar}
              className="text-primary"
            >
              <PiTextAa className="size-5" />
            </Button>
          </Hint>

          <EmojiPopover onEmojiSelect={onEmojiSelect} hint="Emoji">
            <Button
              disabled={disabled}
              size="sm"
              variant="ghost"
              className="text-primary"
            >
              <Smile className="size-5" />
            </Button>
          </EmojiPopover>

          {imageLimit !== imageSources.length && (
            <Hint label="Add Extra Images">
              <Button
                disabled={disabled}
                size="sm"
                variant="ghost"
                onClick={() => imageElementRef.current?.click()}
                className="text-primary"
              >
                <ImageIcon className="size-5" />
              </Button>
            </Hint>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;
