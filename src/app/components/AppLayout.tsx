import { Container } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
      }}
    >
      {children}
    </Container>
  );
};
