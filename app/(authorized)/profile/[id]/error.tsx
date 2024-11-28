"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { notFound } from "next/navigation";

import { Container } from "@/src/ui/components";

const Error = ({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  notFound();
  return (
    <Container>
      <div>
        <h2>{error.message}</h2>
      </div>
    </Container>
  );
};

export default Error;
