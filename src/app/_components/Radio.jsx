"use client";
import classNames from "classnames";
import { useState } from "react";

export default function Radio({
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
            type="radio"
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
