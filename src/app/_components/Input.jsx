'use client'
import classNames from "classnames";
import { useState } from "react";

export default function Input({id, isVertical = false, label, isEssential = false, placeholder, value}) {
  return (
    <>
      <div className={classNames("input-wrap", {horizontal:isVertical})}>
        <div className="input-tit">
          <label htmlFor={id}>{label}</label>
          {isEssential && <span>*</span>}
        </div>
        <input id={id} type="text" placeholder={placeholder} onChange={(e) => value(e.target.value)} />
      </div>
    </>
  );
}