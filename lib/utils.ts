import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper function that combines month, day, and year into a readable string. The reasoning for this is that the Date() object in JavaScript does not give a readable formatted date string.
 * @param {number} month The month of the year from 0-11
 * @param {number} day The day from 0-31
 * @param {number} year The year given in XXXX format
 */
export function convertToReadableDate(
  month: number,
  day: number,
  year: number
) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[month]} ${day}, ${year}`;
}

/**
 * Formats a given number of minutes into a human-readable string, including hours and minutes.
 *
 * @param {number} minutes - The number of minutes to format.
 * @return {string} A string representing the formatted minutes, e.g. "1h 30m" or "45m".
 */
export const formatMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hourString = hours > 0 ? `${hours}h` : "";
  const minuteString = remainingMinutes > 0 ? `${remainingMinutes}m` : "";

  return [hourString, minuteString].filter(Boolean).join(" ");
};

/**
 * Converts a file to a buffer.
 *
 * @param {File} file - The file to be converted.
 * @return {Promise<Buffer>} A promise that resolves with the file buffer.
 */
export const fileToBuffer = async (file: File): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(Buffer.from(reader.result as ArrayBuffer));
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};

/**
 * Converts a given buffer to a base64 encoded string.
 *
 * @param {Buffer} buffer - The buffer to be converted.
 * @return {string} A base64 encoded string representation of the buffer.
 */
export const bufferToBase64 = (buffer: Buffer): string => {
  return buffer.toString("base64");
};

/**
 * Converts an image object to a data URL string.
 *
 * @param {Object} image - The image object containing data and mimeType.
 * @return {string} A data URL string representation of the image.
 */
export const getImageDataUrl = (image: { data: Buffer; mimeType: string }): string => {
  const base64String = bufferToBase64(image.data);
  return `data:${image.mimeType};base64,${base64String}`;
};
