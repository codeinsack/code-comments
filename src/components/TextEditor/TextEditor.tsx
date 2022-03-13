import "./TextEditor.css";
import MDEditor from "@uiw/react-md-editor";
import { FC, useEffect, useState, useRef } from "react";

const TextEditor: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("# Header");

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (event.target && ref.current?.contains(event.target as Node)) {
        return;
      } else {
        setEditing(false);
      }
    };
    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={ref}>
        <MDEditor value={value} onChange={(v) => setValue(v || "")} />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
};

export default TextEditor;
