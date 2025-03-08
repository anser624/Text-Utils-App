import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState(""); // Plain text
  // Functions to modify text
  const upperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const capitalize = () => {
    const capitalizedText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capitalizedText);
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };
  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div class="input-group">
        <span class={`input-group-text bg-${props.mode} text-${props.mode==="dark"?"light":"dark"}`}>Enter Your Text !</span>
        <textarea
          className={`form-control bg-${props.mode} text-${props.mode==="dark"?"light":"dark"}`}
          aria-label="With textarea"
          rows={5}
          value={text} // Connect textarea to state
          onChange={(e) => setText(e.target.value)} // Update state on change
        ></textarea>
      </div>
      <button
        onClick={upperCase}
        type="button"
        className="btn btn-outline-primary"
      >
        Upper-Case
      </button>
      <button
        onClick={lowerCase}
        type="button"
        className="mx-4 my-3 btn btn-outline-primary"
      >
        Lower-Case
      </button>
      <button
        onClick={capitalize}
        type="button"
        className="mx-2 my-3 btn btn-outline-primary"
      >
        Capitalize-Case
      </button>
      <button
        onClick={copyText}
        type="button"
        className="mx-3 my-3 btn btn-outline-primary"
      >
        Text-Copy
      </button>
      <button
        onClick={handleClear}
        type="button"
        className="mx-3 my-3 btn btn-outline-danger"
      >
        Clear-Text
      </button>
      <div className="container mt-4">
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Preview:</h2>
        <p className={`p-3 bg-${props.mode} border rounded text-${props.mode==="dark"?"light":"dark"}`}>{text}</p>
      </div>
    </>
  );
}
