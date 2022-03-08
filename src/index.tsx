import ReactDOM from "react-dom";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button onClick={onClick}>Submit</button>
        <pre>{code}</pre>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
