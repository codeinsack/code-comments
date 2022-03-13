import { FC, Fragment } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CellListItem from "../CellListItem/CellListItem";
import AddCell from "../AddCell/AddCell";

const CellList: FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <AddCell previousCellId={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ));

  return (
    <div>
      {renderedCells}
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
    </div>
  );
};

export default CellList;
