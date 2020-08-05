import React, { useState } from "react";

export function Add(props) {
  const [collabset, setCollabset] = useState(false);
  if (!collabset) {
    return (
      <div>
        <button className="button" onClick={() => setCollabset(true)}>
          Добавить
        </button>
      </div>
    );
  }
  return (
    <div className="input_block">
      <Input
        name={"id"}
        placeholder={"id"}
        value={props.valueId}
        onChange={props.onChangeId}
      />
      <Input
        name={"firstName"}
        placeholder={"firstName"}
        value={props.valueFirstName}
        onChange={props.onChangeFirstName}
      />
      <Input
        name={"lastName"}
        placeholder={"lastName"}
        value={props.valueLastName}
        onChange={props.onChangeLastName}
      />
      <Input
        name={"email"}
        placeholder={"email"}
        value={props.valueEmail}
        onChange={props.onChangeEmail}
      />
      <Input
        name={"phone"}
        placeholder={"phone"}
        value={props.valuePhone}
        onChange={props.onChangePhone}
      />
      <button
        onClick={props.onChange}
        disabled={props.disabled}
        className="button"
      >
        Добавить в таблицу
      </button>
    </div>
  );
}
function Input(props) {
  return (
    <div>
      <input
        className="input"
        id={props.id}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.onChange}
        {...props}
      ></input>
    </div>
  );
}
