import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/store";

function App() {
  let state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <h1>Redux Book</h1>
      <h1>
        Count {state.counter.title} {state.counter.count}
      </h1>

      <hr />
      <Page1 />
      <hr />
      <Page2 />
    </div>
  );
}

function Page1() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <h1>Page1</h1>
      <h1>
        Count {state.counter.title} {state.counter.count}
      </h1>
      <input
        type="button"
        value="Increment"
        onClick={() => dispatch(increment(10))}
      />
    </div>
  );
}

function Page2() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  return (
    <div>
      <h1>Page2</h1>
      <h1>
        Count {state.counter.title} {state.counter.count}
      </h1>
      <input
        type="button"
        value="Increment"
        onClick={() => dispatch(decrement())}
      />
    </div>
  );
}

export default App;
