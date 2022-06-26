import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
