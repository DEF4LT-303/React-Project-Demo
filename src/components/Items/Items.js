import { Fragment } from "react";
import AvailableItems from "./AvailableItems";
import ItemsSummary from "./ItemSummary";

const Items = () => {
  return (
    <Fragment>
      <ItemsSummary />
      <AvailableItems />
    </Fragment>
  );
};

export default Items;