import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  let [list, setList] = useState([]);

  let callAjaxNow = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let res = await axios.get(url);

    // react specifc, updating the statful variable.
    const newList = [...res.data];
    setList(newList);
  };

  return (
    <div>
      <h1>Hello Life Cycle</h1>
      <input type="button" value="Call Ajax Now" onClick={callAjaxNow} />

      {list.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
}

export default App;
