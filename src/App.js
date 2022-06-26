import { useState } from "react";

function App() {
  let [login] = useState(false);

  return (
    <div>
      <h1>Conditional Block</h1>

      {/** IF  */}
      {!login && (
        <p>
          Login Page. Please login with your creedntials. ELse create an Account
          wiht us.
        </p>
      )}

      {/** IF */}
      {login && (
        <p>
          Home Page :: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus minima, velit totam et asperiores laborum assumenda omnis
          voluptates. Vitae consectetur sequi natus cupiditate non officia
          veniam recusandae suscipit illo doloribus.
        </p>
      )}
    </div>
  );
}

export default App;
