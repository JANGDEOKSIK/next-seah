"use client";
import classNames from "classnames";
import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Input({
  id,
  isVertical = false,
  label,
  ex,
  isEssential = false,
  placeholder,
  value,
  isNoTitle,
  isDisabled,
  register,
  validation,
  error,
}) {
  return (
    <>
      <div className={classNames("input-wrap", { horizontal: isVertical })}>
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
        {ex != "" ? <div className="ex-txt f-desc-b">{ex}</div> : ""}
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          onChange={(e) => value(e.target.value)}
          disabled={isDisabled}
          {...register(id, validation)}
        />
        {error && <p>{error.message}</p>}
      </div>
    </>
  );
}
