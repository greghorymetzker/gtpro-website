import React from "react";

export default function BaseView({ className,children, style }) {
  return (
    <div className={`${className || ""}`} style={style}>
      {children}
    </div>
  );
}

