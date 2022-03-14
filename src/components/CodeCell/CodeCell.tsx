import { FC, useEffect } from "react";
import CodeEditor from "../CodeEditor/CodeEditor";
import Preview from "../Preview/Preview";
import Resizable from "../Resizable/Resizable";
import { Cell } from "../../state";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      await createBundle(cell.id, cell.content);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content, cell.id, createBundle]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "calc(100% - 10px)", display: "flex" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        {bundle && <Preview code={bundle.code} err={bundle.err} />}
      </div>
    </Resizable>
  );
};

export default CodeCell;
