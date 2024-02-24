import React from "react";

export default function Arrow({ direction, handleClick }) {
  return (
    <div className="arrow-wrapper" onClick={handleClick}>
      {/* <span class="arrow-prev"></span> */}
    </div>
  );
}
