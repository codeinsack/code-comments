import { FC } from "react";
import { Cell } from "../../state";
import CodeCell from "../CodeCell/CodeCell";
import TextEditor from "../TextEditor/TextEditor";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;

  if (cell.type === "code") {
    child = <CodeCell />;
  } else {
    child = <TextEditor />;
  }

  return <div>{child}</div>;
};

export default CellListItem;
