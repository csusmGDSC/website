import UsersTable from "@/components/main/admin/users/users-table";
import Container from "@/components/ui/container";
import React from "react";

const Users = () => {
  return (
    <Container className="custom-max-width flex flex-col justify-center -mt-20">
      <UsersTable />
    </Container>
  );
};

export default Users;
