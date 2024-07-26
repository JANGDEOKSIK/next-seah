'use client'

import { useState } from "react";

export default function Input({id, isVertical, label, isEssential = false, placeholder, onClick, value}) {

  return (
    <>
      <div className={"input-wrap " + (isVertical ? '' : 'horizontal')}>
        <div className="input-tit">
          <label htmlFor={id}>{label}</label>
          {isEssential && <span>*</span>}
        </div>
        <input id={id} type="text" placeholder={placeholder} onChange={(e) => value(e.target.value)} />
      </div>
    </>
  );
}