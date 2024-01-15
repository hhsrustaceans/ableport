import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";

export function CreateButton({ create }: { create: string }) {
  return (
    <Link href={""} passHref>
      <Button
        sx={{ mt: 1 }}
        variant="contained"
        color="primary"
      >
        {create}
      </Button>
    </Link>
  );
}