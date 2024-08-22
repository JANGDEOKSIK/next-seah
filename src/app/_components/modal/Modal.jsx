"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Modal({ onClose }) {
  const popupFocus = useRef();

  useEffect(()=>{
    popupFocus.current.focus();
  }, [])

  return (
    <>
      <motion.div
        className="modal"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.2 }}
        tabIndex={0}
        ref={popupFocus}
      >
        <div className="inner">
          <div className="header">Header</div>
          <div className="contents">Contents</div>
          <div className="btn-area">Btn Area</div>

          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          >
            X
          </button>
        </div>
      </motion.div>
    </>
  );
}
