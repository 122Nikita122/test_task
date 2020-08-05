import React, { useState } from "react";
import { App } from "../App";

export function FerstPage() {
  const [choice, setChoice] = useState("notChoice");
  if (choice === "notChoice") {
    return (
      <div className="ferstpage">
        <button
          className="ferstpage_button"
          onClick={() => setChoice("ChoiceSmall")}
        >
          Маленькие данные
        </button>
        <button
          className="ferstpage_button"
          onClick={() => setChoice("ChoiceBig")}
        >
          Большие данные
        </button>
      </div>
    );
  }
  return <App choice={choice} />;
}
