import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Col from "@/components/ui/Col";
import Container from "@/components/ui/Container";
import Row from "@/components/ui/Row";
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
      <Container className="mt-4 mb-4">
        <Row>
          <Col md={3} className="pe-4 ">
            <Sidebar />
          </Col>
          <Col md={6} className="ps-4 pe-4 border-start border-end">
            {children}
          </Col>
          <Col md={3} className="ps-4">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
