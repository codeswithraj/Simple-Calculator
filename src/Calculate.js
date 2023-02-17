import React, { useState } from "react";
import "./Calculate.css";

export default function Calculate() {
  const [result, setResult] = useState("");

  const clickhandleData = (event) => {
    setResult(result.concat(event.target.value));
  };
  const clearDisplay = () => {
    setResult("");
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <>
      <div class="center">
        <form name="forms" />
        <input
          type="text"
          id="display"
          name="display"
          disabled
          value={result}
        />
        <div class="buttons">
          <input type="button" id="seven" value="7" onClick={clickhandleData} />
          <input type="button" id="eight" value="8" onClick={clickhandleData} />
          <input type="button" id="nine" value="9" onClick={clickhandleData} />
          <input
            type="button"
            id="divide"
            value="/"
            onClick={clickhandleData}
          />
          <br />
          <input type="button" id="four" value="4" onClick={clickhandleData} />
          <input type="button" id="five" value="5" onClick={clickhandleData} />
          <input type="button" id="six" value="6" onClick={clickhandleData} />
          <input type="button" id="multi" value="*" onClick={clickhandleData} />
          <br />
          <input type="button" id="one" value="1" onClick={clickhandleData} />
          <input type="button" id="two" value="2" onClick={clickhandleData} />
          <input type="button" id="three" value="3" onClick={clickhandleData} />
          <input type="button" id="subs" value="-" onClick={clickhandleData} />
          <br />
          <input type="button" id="dot" value="." onClick={clickhandleData} />
          <input type="button" id="zero" value="0" onClick={clickhandleData} />
          <input type="button" id="add" value="+" onClick={clickhandleData} />
          <input type="button" id="clear" value="C" onClick={clearDisplay} />
          <br />
          <input type="button" id="equal" value="=" onClick={calculate} />
        </div>
      </div>
    </>
  );
}
