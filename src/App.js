import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyNavMenu />

      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

function MyNavMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Tweet Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/page1">
              Page1
            </Nav.Link>
            <Nav.Link as={Link} to="/page2">
              Page2
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Page1() {
  let list = Array.from({ length: 100 });
  return (
    <div className="container">
      <div className="row">
        {list.map((item, index) => (
          <div key={index} className="col-4">
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function Page2() {
  let [list, setList] = useState([]);

  useEffect(() => {
    makeAjaxCallNow();
  }, []);

  let makeAjaxCallNow = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let res = await axios.get(url);

    setList([...res.data]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {list.map((item, index) => (
            <div className="alert alert-secondary mb-1 h3" key={index}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
