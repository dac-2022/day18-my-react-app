import { useState } from "react";

function App() {
  let [login, setLogin] = useState(false);
  return (
    <div>
      <h1>Conditional Demo</h1>
      {login ? (
        <LoggedInUser setLogin={setLogin} />
      ) : (
        <NotLoggedInUser setLogin={setLogin} />
      )}
    </div>
  );
}

function LoggedInUser({ setLogin }) {
  const changeLoginStatus = () => {
    setLogin(false);
  };

  return (
    <div>
      <h1>User is Logged In</h1>

      <h1>Home Page</h1>
      <input type="button" value="Logout" onClick={changeLoginStatus} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque
        architecto omnis! Maxime placeat expedita nesciunt, aperiam dicta
        deserunt illum numquam veniam ullam dolorum maiores quod! Illum,
        veritatis! Quibusdam, dolores!
      </p>
    </div>
  );
}

function NotLoggedInUser({ setLogin }) {
  const changeLoginStatus = () => {
    setLogin(true);
  };

  return (
    <div>
      <h1>User is Not Logged In</h1>
      <h1>Login Page</h1>
      <input type="button" value="Login" onClick={changeLoginStatus} />
    </div>
  );
}

export default App;
