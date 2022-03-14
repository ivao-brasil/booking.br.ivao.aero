import { FunctionComponent } from "react";
import style from "./checkbox.module.css";

export interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  value,
  onChange,
}) => {
  return (
    <label className={style.container}>
      <input
        type="checkbox"
        className={style.checkbox}
        checked={value}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className={style.checkmark} />
    </label>
  );
};
