import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaDiscord, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="w-full sm:h-[12rem] pb-4 sm:pb-0 border-t border-b-border bg-background items-center flex flex-col mt-20">
        <div className="h-full grid grid-cols-1 sm:grid-cols-4 custom-max-width">
          <div className="flex flex-col items-center justify-between h-full pt-10 sm:col-span-2 sm:mr-auto">
            <Image
              src="/images/gdsc/gdsc-csusm title light.png"
              alt="navbar-logo"
              width="355"
              height="24"
            />

            <Image
              src="/images/google-city.png"
              alt="navbar-logo"
              className="hidden md:block"
              width="255"
              height="24"
            />
          </div>

          <div className="flex flex-col text-sm gap-2 pt-10 pl-4 sm:pl-0 sm:ml-auto [&>h1]:font-semibold">
            <h1>Quick Links</h1>
            <Link
              href="/"
              className="hover:underline hover:text-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="hover:underline hover:text-blue transition-colors"
            >
              Events
            </Link>
            <Link
              href="/projects"
              className="hover:underline hover:text-blue transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/resources"
              className="hover:underline hover:text-blue transition-colors"
            >
              Resources
            </Link>
          </div>

          <div className="flex flex-col text-sm gap-2 pt-10 pl-4 sm:pl-0 sm:ml-auto [&>h1]:font-semibold">
            <h1>Resources</h1>
            <Link
              href="/resources"
              className="hover:underline hover:text-blue transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/privacy"
              className="hover:underline hover:text-blue transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:underline hover:text-blue transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-12 flex flex-col items-center justify-center bg-primary-foreground">
        <div className="flex flex-row items-center justify-between custom-max-width">
          <span className="text-neutral-400 font-semibold text-xs px-2 md:px-0">
            © 2024 CSUSM
          </span>
          <div className="flex flex-row gap-4 text-neutral-700">
            <a href="https://www.instagram.com/gdsc.csusm/" target="_blank">
              <CiInstagram
                className="hover:text-blue hover:cursor-pointer transition"
                size={20}
              />
            </a>
            <a href="https://x.com/dsccsusm?lang=en" target="_blank">
              <FaXTwitter
                className="hover:text-blue hover:cursor-pointer transition"
                size={20}
              />
            </a>
            <FaLinkedin
              className="hover:text-blue hover:cursor-pointer transition"
              size={20}
            />
            <FaDiscord
              className="hover:text-blue hover:cursor-pointer transition"
              size={20}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
