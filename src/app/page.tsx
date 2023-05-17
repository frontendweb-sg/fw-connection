import Row from "@/components/ui/Row";
import Col from "@/components/ui/Col";
import Container from "@/components/ui/Container";

import Auth from "@/components/auth/Auth";
import Logo from "@/components/layout/Logo";
import Typography from "@/components/ui/Typography";

export default function Home() {
  return (
    <Container isFull cover>
      <Row cover>
        <Col className="bg-primary text-light align-items-center justify-content-center d-flex">
          <div className="w-50">
            <Logo className="mb-5" href="/" mode="dark" />
            <Typography>Welcome to sign in</Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            eius sint, voluptatem nesciunt, laborum placeat sunt culpa magni
            expedita facilis aut iste amet, reprehenderit consequatur voluptate
            ullam veniam ipsam quae!
            <Typography variant="h5" className="mt-4">
              Learn frontend technologies by expert
            </Typography>
          </div>
        </Col>
        <Col className="justify-content-center align-items-center d-flex relative">
          <Auth />
        </Col>
      </Row>
    </Container>
  );
}
