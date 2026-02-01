import React from "react";
import { Rnd } from "react-rnd";
import { motion, AnimatePresence } from "framer-motion";

const MacWin = ({ children, setWindowState, windowKey, title = "Terminal" }) => {
  const handleClose = () => {
    if (setWindowState && windowKey) {
      setWindowState((s) => ({ ...s, [windowKey]: false }));
    }
  };

  return (
    <AnimatePresence>
      <Rnd
        default={{
          width: "50vw",
          height: "50vh",
          x: window.innerWidth / 2 - (window.innerWidth * 0.5) / 2,
          y: window.innerHeight / 2 - (window.innerHeight * 0.5) / 2,
        }}
        minWidth={300}
        minHeight={200}
        bounds="parent"
        dragHandleClassName="window-header"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="flex flex-col h-full glass-dark rounded-xl overflow-hidden border border-white/20 shadow-2xl"
        >
          {/* Window Header */}
          <div className="window-header flex items-center px-4 py-2.5 bg-white/5 border-b border-white/10 select-none">
            <div className="flex gap-2">
              <button
                onClick={handleClose}
                className="group relative flex items-center justify-center w-3 h-3 bg-[#FF5F56] rounded-full border border-black/10 active:opacity-70 transition-all cursor-default"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[10px] text-black/60 font-bold transition-opacity">✕</span>
              </button>
              <button className="group relative flex items-center justify-center w-3 h-3 bg-[#FFBD2E] rounded-full border border-black/10 transition-all cursor-default">
                <span className="opacity-0 group-hover:opacity-100 text-[10px] text-black/60 font-bold transition-opacity">−</span>
              </button>
              <button className="group relative flex items-center justify-center w-3 h-3 bg-[#27C93F] rounded-full border border-black/10 transition-all cursor-default">
                <span className="opacity-0 group-hover:opacity-100 text-[10px] text-black/60 font-bold transition-opacity">+</span>
              </button>
            </div>
            <div className="flex-1 text-center pr-12">
              <span className="text-xs font-medium text-white/70 tracking-tight">{title}</span>
            </div>
          </div>

          {/* Window Content */}
          <div className="flex-1 overflow-hidden relative">
            {children}
          </div>
        </motion.div>
      </Rnd>
    </AnimatePresence>
  );
};

export default MacWin;

