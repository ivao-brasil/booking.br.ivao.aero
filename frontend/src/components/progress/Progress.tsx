import { FunctionComponent, useEffect } from "react";
import styles from "./progress.module.css";

export interface ProgressProps {
  steps: Array<string>;
  onChange: (step: number) => void;
  value: number;
}

export const Progress: FunctionComponent<ProgressProps> = ({
  steps,
  onChange,
  value,
}) => {
  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  const getClassStatus = (index: number) => {
    return index <= value ? styles.completed : "";
  };

  return (
    <div className={styles.wrapper}>
      {steps.map((step, index) => (
        <div
          className={styles.item + " " + getClassStatus(index)}
          key={step}
          onClick={() => onChange(index)}
          style={{ width: (100 / steps.length).toString() + "%" }}
        >
          <div className={styles.counter}></div>
          <div className={styles.legend}>{step}</div>
        </div>
      ))}
    </div>
  );
};
