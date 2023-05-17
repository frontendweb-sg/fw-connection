import Header from "@/components/layout/Header";
import Container from "@/components/ui/Container";
import type { ReactNode } from "react";

/**
 * Private layout
 * @param param0
 * @returns
 */
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
