import "bulmaswatch/superhero/bulmaswatch.min.css";

import ReactDOM from "react-dom";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import bundle from "./bundler";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue={"const a = 1;"}
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
