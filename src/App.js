import { useState } from "react";

function App() {
  let [login, setLogin] = useState(false);

  const changeLoginStatus = () => {
    /*if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }*/
    login ? setLogin(false) : setLogin(true);
  };

  return (
    <div>
      <h1>Conditional Block</h1>

      {login ? "You are logged In" : "Please Login!"}
      {login ? <h1>you are logged in</h1> : <h1>Please Login!</h1>}

      {/** IF  */}
      {!login && (
        <div>
          <p>
            Login Page. Please login with your creedntials. ELse create an
            Account wiht us.
          </p>
          <input type="button" value="Login" onClick={changeLoginStatus} />
        </div>
      )}

      {/** IF */}
      {login && (
        <div>
          <p>
            Home Page :: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ducimus minima, velit totam et asperiores laborum assumenda
            omnis voluptates. Vitae consectetur sequi natus cupiditate non
            officia veniam recusandae suscipit illo doloribus.
          </p>

          <input type="button" value="Logout" onClick={changeLoginStatus} />
        </div>
      )}
    </div>
  );
}

export default App;
