function App() {
  // Event Function Handler
  const clickMe1 = (p1) => {
    console.log(p1);
    alert(`Hello World ${p1}`);
  };

  return (
    <div>
      <h1>Event Binding Demo</h1>

      {/** This is shourcut */}
      <input type="button" value="Click Me" onClick={clickMe1} />

      {/** Internally React Convert into this. */}
      <input type="button" value="Click Mee" onClick={(e) => clickMe1(e)} />

      {/** This approach is very important, when we need to pass parameter */}
      <input type="button" value="Click Me 1" onClick={() => clickMe1()} />

      {/** Pass Parameter to function */}
      <input
        type="button"
        value="Click Me 2"
        onClick={() => clickMe1("Rohit")}
      />
    </div>
  );
}

export default App;
