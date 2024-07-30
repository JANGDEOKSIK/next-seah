import { motion } from "framer-motion";

export default function Modal({ onClose }) {
  return (
    <>
      <motion.div
        className="modal"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.2 }}
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
