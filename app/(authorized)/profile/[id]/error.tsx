"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

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

  return (
    <Container>
      <div>
        <h2>Профиль не существует</h2>
      </div>
    </Container>
  );
};

export default Error;
