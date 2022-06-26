import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
  makeAjaxCall,
} from "./store/store";

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
      <Page1Async />

      <hr />
      <Page1 />
      <hr />
      <Page2 />
    </div>
  );
}

function Page1Async() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  return (
    <div>
      <h1>Page1 Async</h1>
      <h1>
        {state.counter.title} / {state.counter.count}
      </h1>

      <input
        type="button"
        value="ASync INcremnt"
        onClick={() => dispatch(incrementAsync())}
      />

      <input
        type="button"
        value="Ajax Call"
        onClick={() => dispatch(makeAjaxCall())}
      />
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

      {state.counter?.list.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}

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
