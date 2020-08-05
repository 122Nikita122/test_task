import React from "react";

export function String(props) {
  return (
    <div className={props.classNameStringBlock} onClick={props.onClick}>
      <div className={props.classNameString}>{props.id}</div>
      <div className={props.classNameString}>{props.firstName}</div>
      <div className={props.classNameString}>{props.lastName}</div>
      <div className={props.classNameString}>{props.email}</div>
      <div className={props.classNameString}>{props.phone}</div>
    </div>
  );
}
