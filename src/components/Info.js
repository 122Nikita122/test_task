import React from "react";

export function Info(props) {
  return (
    <div className="info">
      <b>
        {props.firstName} {props.lastName}
      </b>
      <p>Описание:</p>
      <textarea>{props.description}</textarea>
      <p>Адрес проживания:</p>
      <b>{props.streetAddress}</b>
      <p>Город:</p>
      <b>{props.city}</b>
      <p>Провинция/штат:</p>
      <b>{props.state}</b>
      <p>Индекс:</p>
      <b>{props.zip}</b>
    </div>
  );
}
