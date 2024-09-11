import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Dialog, DialogContent, DialogTrigger } from "../dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "../button";
import { GDSCUser } from "@/types/gdsc-user";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";

/**
 * Component that shows an avatar along with their information and socials
 * @param {GDSCUser} user - The GDSC User object
 */
const AvatarCard = ({ user }: { user: GDSCUser }) => {
  const socialStyle =
    "hover:text-blue hover:cursor-pointer transition text-xl text-foreground/50";

  const Linkedin = ({ link }: { link: string }) => (
    <Link href={link} target="_blank">
      <BsLinkedin className={socialStyle} />
    </Link>
  );
  const Github = ({ link }: { link: string }) => (
    <Link href={link} target="_blank">
      <BsGithub className={socialStyle} />
    </Link>
  );
  const Instagram = ({ link }: { link: string }) => (
    <Link href={link} target="_blank">
      <BsInstagram className={socialStyle} />
    </Link>
  );
  const Website = ({ link }: { link: string }) => (
    <Link href={link} target="_blank">
      <CiGlobe className={socialStyle} />
    </Link>
  );
  const Twitter = ({ link }: { link: string }) => (
    <Link href={link} target="_blank">
      <BsTwitterX className={socialStyle} />
    </Link>
  );

  return (
    <div className="flex flex-col items-center w-[200px] h-[300px] justify-center p-6 dark:bg-primary-foreground rounded-xl custom-box-shadow">
      <Avatar className="w-24 h-24">
        <AvatarImage src={user?.image} />
        <AvatarFallback>{user.fullName[0] || ""}</AvatarFallback>
      </Avatar>
      <h2 className="mt-2 text-lg font-semibold text-foreground/70 text-center">
        {user.fullName}
      </h2>
      <p className="text-sm font-medium text-foreground/50">{user.branch}</p>
      <div className="mt-2 flex gap-2">
        <Linkedin link={user.linkedin || ""} />
        <Github link={user.github || ""} />
        <Website link={user.website || ""} />
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-auto px-10 text-primary bg-blue text-white text-sm font-medium hover:bg-blue/70 transition-colors">
            View
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogDescription>
            <div className="flex gap-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user?.image} />
                <AvatarFallback>{user.fullName[0] || ""}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-between">
                <span>
                  <h2 className="text-2xl font-semibold text-foreground/70">
                    {user.fullName}
                  </h2>
                  <p className="text-xl font-medium text-foreground/50">
                    {user.branch} team
                  </p>
                </span>
                <div className="flex gap-2">
                  <Linkedin link={user.linkedin || ""} />
                  <Github link={user.github || ""} />
                  <Instagram link={user.instagram || ""} />
                  <Twitter link={user.twitter || ""} />
                  <Website link={user.website || ""} />
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="text-primary/90">
              {user.bio && user.bio.length > 0 ? (
                <p>{user.bio}</p>
              ) : (
                <p>No bio provided</p>
              )}
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AvatarCard;
