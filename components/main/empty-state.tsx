"use client";

import React from "react";
import Container from "../ui/container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const EmptyState = ({
  label,
  actionLabel,
  href,
}: {
  label: string;
  actionLabel?: string;
  href?: string;
}) => {
  return (
    <Container className="custom-max-width flex flex-col justify-center items-center mt-20">
      <h1 className="text-xl md:text-3xl font-semibold text-center text-primary">
        {label}
      </h1>
      <Image
        src="/images/empty-search.jpg"
        width={450}
        height={450}
        alt="empty"
      />
      {actionLabel && (
        <Link href={href || ""}>
          <Button className="bg-blue hover:bg-blue/70 text-white">
            {actionLabel}
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default EmptyState;
