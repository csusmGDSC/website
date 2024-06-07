import Container from "@/components/ui/helpers/container";
import React from "react";
import styles from "./about-csusm.module.css";
import { Button } from "@/components/ui/inputs/button";
import Link from "next/link";
import Image from "next/image";

const description1 =
  "A forward-focused institution, dedicated to preparing future leaders, building great communities and solving critical issues. Located on a 304-acre hillside overlooking the city of San Marcos, the University is just a short distance from some of Southern California’s best beaches and an hour from the U.S.-Mexico border.";
const description2 =
  "Through leading-edge programs, superior teaching and extensive workforce training opportunities, CSU students graduate with the critical thinking skills, industry knowledge and hands-on experience necessary for employment and career advancement.";

const AboutCSUSM = () => {
  return (
    <Container heading="About CSUSM" className={styles.container}>
      <div className={styles.containerInnerContent}>
        {/* CSUSM Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/campus.png"
            alt="benefits"
            width="1920"
            height="1080"
            className={styles.image}
          />
        </div>

        {/* CSUSM Description */}
        <div className={styles.detailsContainer}>
          <h1 className={styles.heading}>
            California State University, San Marcos
          </h1>

          <p className={styles.description}>
            {description1}
            <br />
            <br />
            {description2}
          </p>

          <Link href="https://www.csusm.edu/index.html" target="_blank">
            <Button className={styles.button}>Learn More</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AboutCSUSM;
