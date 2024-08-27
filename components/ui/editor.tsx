import React, {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Quill, { type QuillOptions } from "quill";

import "quill/dist/quill.snow.css";
import { Button } from "./shadcn/button";
import { PiTextAa } from "react-icons/pi";
import { ImageIcon, Smile, XIcon } from "lucide-react";
import { MdSend } from "react-icons/md";
import { Hint } from "./hint";
import { Delta, Op } from "quill/core";
import { cn } from "@/lib/utils";
import { EmojiPopover } from "./emoji-popover";
import Image from "next/image";

type EditorValue = {
  images: File[] | null;
  body: string;
};

interface EditorProps {
  variant?: "create" | "update" | "description";
  onSubmit: ({ images, body }: EditorValue) => void;
  onCancel?: () => void;
  placeholder?: string;
  defaultValue?: Delta | Op[];
  disabled?: boolean;
  innerRef?: MutableRefObject<Quill | null>;
  imageLimit?: number;
}

/**
 * A UNCONTROLLED (SUBMIT-BASED) customizable text editor component with support for formatting, image upload, and emoji insertion.
 *
 * @param {EditorProps} props - The component props.
 * @param {string} props.variant - The variant of the editor, can be "description", "create", or "update".
 * @param {function} props.onSubmit - The callback function to call when the submit button is clicked.
 * @param {function} props.onCancel - The callback function to call when the cancel button is clicked.
 * @param {string} props.placeholder - The placeholder text to display in the editor.
 * @param {array} props.defaultValue - The default value of the editor.
 * @param {object} props.innerRef - A reference to the editor instance.
 * @param {boolean} props.disabled - Whether the editor is disabled.
 * @param {number} props.imageLimit - The maximum number of images that can be uploaded.
 * @return {JSX.Element} The editor component.
 */
const Editor = ({
  variant = "description",
  onSubmit,
  onCancel,
  placeholder = "Write something...",
  defaultValue = [],
  innerRef,
  disabled = false,
  imageLimit = 5,
}: EditorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const submitRef = useRef(onSubmit);
  const placeholderRef = useRef(placeholder);
  const quillRef = useRef<Quill | null>(null);
  const defaultValueRef = useRef(defaultValue);
  const disabledRef = useRef(disabled);
  const variantRef = useRef(variant);
  const imageElementRef = useRef<HTMLInputElement>(null);
  const imagesRef = useRef<File[]>([]);

  // Used to track if editor is empty
  const [text, setText] = useState("");

  // Hiding editor toolbar on hide formatting enabled
  const [isToolbarVisible, setIsToolbarVisible] = useState(true);

  // Extra image sources if user wants to add additional images to event description
  const [imageSources, setImageSources] = useState<File[]>([]);

  useLayoutEffect(() => {
    submitRef.current = onSubmit;
    placeholderRef.current = placeholder;
    defaultValueRef.current = defaultValue;
    disabledRef.current = disabled;
    variantRef.current = variant;
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
        keyboard: {
          bindings: {
            enter: {
              key: "Enter",
              handler: () => {
                if (variant !== "description") {
                  const text = quill.getText();
                  const addedImage = imageElementRef.current?.files![0] || null;

                  const isEmpty =
                    !addedImage &&
                    text.replace(/<(.|\n)*?>/g, "").trim().length === 0;

                  if (isEmpty) return false;

                  const body = JSON.stringify(quill.getContents());
                  submitRef.current?.({ images: imagesRef.current, body });

                  // Explicity return false to prevent the default behavior
                  return false;
                } else {
                  // Explicity return true to use the default behavior
                  return true;
                }
              },
            },
            shift_enter: {
              key: "Enter",
              shiftKey: true,
              handler: () => {
                quill.insertText(quill.getSelection()?.index || 0, "\n");

                // Explicity return false to prevent the default behavior
                return false;
              },
            },
          },
        },
      },
    };

    const quill = new Quill(editorContainer, options);
    quillRef.current = quill;

    if (innerRef) {
      innerRef.current = quill;
    }

    quill.setContents(defaultValueRef.current);
    setText(quill.getText());

    quill.on(Quill.events.TEXT_CHANGE, () => {
      setText(quill.getText());
    });

    return () => {
      quill.off(Quill.events.TEXT_CHANGE);
      if (quillRef.current) {
        quillRef.current = null;
      }
      if (innerRef) {
        innerRef.current = null;
      }
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [innerRef]);

  const isEmpty =
    imageSources.length === 0 &&
    text.replace(/<(.|\n)*?>/g, "").trim().length === 0;

  const toggleToolbar = () => {
    setIsToolbarVisible(!isToolbarVisible);
    const toolbarElement = containerRef.current?.querySelector(".ql-toolbar");
    if (toolbarElement) {
      toolbarElement?.classList.toggle("hidden");
    }
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
        onChange={(event) => {
          const file = event.target.files && event.target.files[0];
          if (file) {
            setImageSources([...imageSources!, file]);
          }
        }}
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
                      setImageSources(
                        imageSources.filter((image) => image !== imageSrc)
                      );
                      imageElementRef.current!.value = "";
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

          {(variant === "create" || variant === "description") &&
            imageLimit !== imageSources.length && (
              <Hint label="Insert Image">
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

          {variant === "update" && (
            <div className="ml-auto flex items-center gap-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onCancel}
                disabled={disabled}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  onSubmit({
                    images: imageSources,
                    body: JSON.stringify(quillRef.current?.getContents()),
                  });
                }}
                disabled={disabled || isEmpty}
                className="bg-blue hover:bg-blue/80 text-white"
              >
                Save
              </Button>
            </div>
          )}

          {variant === "create" && (
            <Button
              disabled={disabled || isEmpty}
              onClick={() => {
                onSubmit({
                  images: imageSources,
                  body: JSON.stringify(quillRef.current?.getContents()),
                });
              }}
              className={cn(
                "ml-auto",
                isEmpty
                  ? "bg-white hover:bg-white text-muted-foreground"
                  : "bg-blue hover:bg-blue/80 text-white"
              )}
              size="sm"
            >
              <MdSend className="size-5" />
            </Button>
          )}
        </div>
      </div>
      {variant === "create" && (
        <div
          className={cn(
            "p-2 text-[10px] text-muted-foreground flex justify-end opacity-0 transition",
            !isEmpty && "opacity-100"
          )}
        >
          <p>
            <strong>Shift + Return</strong> to add a new line
          </p>
        </div>
      )}
    </div>
  );
};

export default Editor;
