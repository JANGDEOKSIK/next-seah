"use client";
import classNames from "classnames";

export default function Checkbox({
  id,
  label,
  isEssential = false,
  placeholder,
  value,
  isNoTitle,
  children,
  defaultChecked,
  name,
}) {
  return (
    <>
      <div className="input-wrap">
        {isNoTitle ? (
          ""
        ) : (
          <div className="input-tit f-body1-eb">
            <div className="label">
              <label htmlFor={id}>{label}</label>
              {isEssential && <span>*</span>}
            </div>
          </div>
        )}
        <label>
          <input
            type="checkbox"
            value={value}
            defaultChecked={defaultChecked}
            name={name}
          />
          {children}
        </label>
      </div>
    </>
  );
}
