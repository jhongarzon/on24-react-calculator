import React, { FC } from "react";
import ToogleSwitch from "../../General/components/ToogleSwitch";

type ToogleHistoryProps = {
  isChecked: boolean;
  handleChange: (e: boolean) => void;
};
const ToogleHistory: FC<ToogleHistoryProps> = ({
  isChecked,
  handleChange,
}: ToogleHistoryProps) => {
  return (
    <div className="toogle-calc">
      <ToogleSwitch
        name="toogle"
        checked={isChecked}
        onChange={handleChange}
      ></ToogleSwitch>
      <div>Show History?</div>
    </div>
  );
};
export default ToogleHistory;
