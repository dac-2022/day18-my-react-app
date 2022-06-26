import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/page1">Page1 | </Link>
        <Link to="/page2">Page2</Link>
      </div>

      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

function Page1() {
  return (
    <div>
      <h1>Page1..... </h1>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1>Page2... </h1>
    </div>
  );
}

export default App;
