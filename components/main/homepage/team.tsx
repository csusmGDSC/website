"use client";

import AvatarCard from "@/components/ui/cards/avatar-card";
import Container from "@/components/ui/container";
import GoogleLoadingBounce from "@/components/ui/loaders/google-loading-bounce";
import { useGDSCTeam } from "@/hooks/use-gdsc-team";
import React from "react";

/**
 * Component that shows the GDSC-CSUSM's current team members
 */
const Team = () => {
  const { team } = useGDSCTeam();

  return (
    <Container heading="GDSC-CSUSM Team 2024" className="custom-max-width">
      <Container className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {team ? (
          team.map((member, index) => <AvatarCard key={index} user={member} />)
        ) : (
          <GoogleLoadingBounce />
        )}
      </Container>
    </Container>
  );
};

export default Team;
