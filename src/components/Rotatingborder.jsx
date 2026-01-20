import React from "react";

const RotatingBorder = ({ children }) => {
  return (
    <div className="relative p-[3px] rounded-2xl">
      
      {/* Rotating gradient */}
      <div className="absolute inset-0 rounded-2xl animate-spin-slow
        bg-[conic-gradient(#3b82f6,transparent,transparent,#3b82f6)]" />

      {/* Inner mask */}
      <div className="relative rounded-2xl bg-white">
        {children}
      </div>

    </div>
  );
};

export default RotatingBorder;
