import { useState, useEffect } from "react";
import "../App.css";

/* eslint-disable react/prop-types */
export const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent.toFixed()}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};
