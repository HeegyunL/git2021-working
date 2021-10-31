import Link from "next/link";

import { Navbar, Container, Nav } from "react-bootstrap";

const AppBar = () => {
  return (
    <Navbar >
      <Container className="w-100">
        <Navbar.Brand className="ms-5">
          <Link href="/">
            <span className="text-light">GaGym</span>
          </Link>
        </Navbar.Brand>
        <div className="d-flex justify-content-end me-3">
          <a className="text-light" href="/about">
            ABOUT
          </a>
          <Nav className="me-auto">
            <Nav.Link>
              <Link href="/">HOME</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/about">
                <a href="/about" className="text-light">
                  헬스장 정보
                </a>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/todo">
                <span className="text-light">예약 내역</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/photos">
                <span className="text-light">PT 일지</span>
              </Link>
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default AppBar;