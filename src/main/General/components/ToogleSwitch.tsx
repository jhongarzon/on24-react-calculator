import React, { FC, SyntheticEvent } from "react";

type ToogleSwitchProps = {
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};
const ToggleSwitch: FC<ToogleSwitchProps> = ({
  name,
  checked,
  onChange,
}: ToogleSwitchProps) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={(e: SyntheticEvent) =>
          onChange((e.currentTarget as HTMLInputElement).checked)
        }
      />
      <label className="toggle-switch-label" htmlFor={name}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
