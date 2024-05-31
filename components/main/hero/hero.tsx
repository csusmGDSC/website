import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { IoMdAlert } from "react-icons/io";
import styles from "./Hero.module.css";

const description =
  "The Google Developer Student Club (GDSC) at California State University San Marcos is a university-based community for students interested in developing technical skills and leadership. By joining GDSC, you can participate in projects, practice interview questions, and partake in peer-to-peer activities, while building real-world software products for stakeholders.";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/images/header-background.png"
        alt="header-background"
        width="1920"
        height="1080"
        className={styles.heroImage}
      />

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Developer Student Club <br /> CSUSM
          </h1>

          <p className={styles.heroDescription}>{description}</p>

          <a
            href="https://gdsc.community.dev/"
            target="_blank"
            className={styles.learnMoreButton}
          >
            <Button className={styles.buttonStyle}>
              <IoMdAlert size={20} /> LEARN MORE
            </Button>
          </a>
        </div>

        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/hero-image.png"
            alt="hero-image"
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            className={styles.heroImageContent}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
