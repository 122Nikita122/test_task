import React, { useState } from "react";

export function Heading({
  setSortOptions,
  classNameLabel,
  classNameString,
  id,
  placeholder,
}) {
  const [order, setOrder] = useState("asc");

  function handleClick() {
    setSortOptions({
      property: id,
      order,
    });
    setOrder((x) => (x === "asc" ? "desc" : "asc"));
  }

  return (
    <div className={classNameLabel}>
      <button
        className={classNameString}
        onClick={handleClick}
        placeholder={placeholder}
      >
        {id}
        <div className={order === "asc" ? "arrow_asc" : "arrow_desc"}></div>
      </button>
    </div>
  );
}
