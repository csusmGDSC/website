import Image from "next/image";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import styles from "./footer.module.css";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={cn(styles.content, "custom-max-width")}>
          <div className={styles.logoContainer}>
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

          <div className={styles.quickLinks}>
            <h1>Quick Links</h1>
            <p>Home</p>
            <p>Events</p>
            <p>Projects</p>
            <p>Resources</p>
          </div>

          <div className={styles.resources}>
            <h1>Resources</h1>
            <p>FAQ</p>
            <p>Terms of Service</p>
            <p>Cookies Policy</p>
            <p>Support</p>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={cn(styles.footerBottomContent, "custom-max-width")}>
          <span className={styles.footerText}>© 2024 CSUSM</span>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/gdsc.csusm/" target="_blank">
              <CiInstagram className={styles.icon} size={20} />
            </a>
            <a href="https://x.com/dsccsusm?lang=en" target="_blank">
              <FaXTwitter className={styles.icon} size={20} />
            </a>
            <FaLinkedin className={styles.icon} size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
