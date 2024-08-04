import React from "react";
import Avatar from "../avatar";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

interface AvatarCardProps {
  name: string;
  role: string;
  linkedinLink?: string;
  gitHubLink?: string;
  instagramLink?: string;
  imageSrc?: string;
}

/**
 * Component that shows an avatar along with their information and socials
 * @param {string} name Their name to be displayed
 * @param {string} role What they do in relevance to the section
 * @param {string} linkedinLink URL to LinkedIn profile
 * @param {string} gitHubLink URL to GitHub profile
 * @param {string} instagramLink URL to Instagram profile
 * @param {string} imageSrc URL or path to image source (View NextJS documentation if using URL)
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  name,
  role,
  linkedinLink,
  gitHubLink,
  instagramLink,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 dark:bg-primary-foreground rounded-xl custom-box-shadow">
      <Avatar imageSrc={imageSrc} size={70} />
      <h2 className="mt-2 text-lg font-semibold text-foreground/70">{name}</h2>
      <p className="text-sm font-medium text-foreground/50">{role}</p>
      <div className="mt-2 flex flex-rol gap-2 text-xl text-foreground/50">
        <BsLinkedin className="hover:text-blue hover:cursor-pointer transition" />
        <BsGithub className="hover:text-blue hover:cursor-pointer transition" />
        <BsInstagram className="hover:text-blue hover:cursor-pointer transition" />
      </div>
    </div>
  );
};

export default AvatarCard;
