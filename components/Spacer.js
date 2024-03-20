import React from "react";

export function Spacer({ primary = 1 }) {
  console.log(primary);
  return <div style={{ height: `${primary}rem` }} />;
}
