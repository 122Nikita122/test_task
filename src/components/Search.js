import React from "react";

export function Search(props) {
  return (
    <div>
      <input
        name="search"
        value={props.value}
        onChange={props.onChange}
      ></input>
      <button className="button" onClick={props.Click}>
        Найти
      </button>
    </div>
  );
}
