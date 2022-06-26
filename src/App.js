import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Container, Navbar } from "react-bootstrap";

function App() {
  let [list, setList] = useState([]);

  useEffect(() => {
    console.log("ANything.....");

    // INitilzed the ajax call;
    callAjaxNow();
  }, []);

  let callAjaxNow = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let res = await axios.get(url);

    // react specifc, updating the statful variable.
    const newList = [...res.data];
    setList(newList);
  };

  return (
    <div className="contianer-fluid">
      <Navbar expand="lg" variant="dark" bg="primary" sticky="top">
        <Container>
          <Navbar.Brand href="#">Tweet Book</Navbar.Brand>
        </Container>
      </Navbar>

      {list.map((item, index) => (
        <div className="alert alert-primary mb-1 h3" key={index}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default App;
