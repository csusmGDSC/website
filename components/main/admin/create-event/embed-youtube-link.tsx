import { ICommand, TextAreaTextApi, TextState } from "@uiw/react-md-editor";
import { FaYoutube } from "react-icons/fa6";

export const EmbedYoutubeLink: ICommand = {
  name: "Embed Youtube Link",
  keyCommand: "embedYoutubeLink",
  buttonProps: {
    "aria-label": "Embed Youtube Link",
    title: "Embed Youtube Link",
  },
  icon: <FaYoutube />,
  execute: (state: TextState, api: TextAreaTextApi) => {
    // Prompt the user to enter the YouTube video ID or full URL
    const videoUrlOrId =
      window.prompt("Enter the YouTube video ID or full URL:") || "";

    // If user cancels or enters nothing, exit the function
    if (!videoUrlOrId) return;

    // Extract the video ID from the YouTube URL if a full URL is provided
    let videoId = videoUrlOrId;
    const youtubeUrlMatch = videoUrlOrId.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/
    );
    if (youtubeUrlMatch && youtubeUrlMatch[1]) {
      videoId = youtubeUrlMatch[1];
    }

    // Construct the iframe HTML for embedding the video
    const youtubeEmbedHtml = `<div>
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/${videoId}"
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    `;

    // Insert the iframe HTML into the text area at the current selection
    const newText = `${state.text.substring(
      0,
      state.selection.start
    )}${youtubeEmbedHtml}${state.text.substring(state.selection.end)}`;
    api.replaceSelection(newText);
  },
};
