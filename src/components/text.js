import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState(""); // Plain text

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleTextTransform = (transform) => {
    const newText = transform(text);
    setText(newText);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  const removeExtraSpace = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };
  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div className="input-group">
        <span className={`input-group-text bg-${props.mode} text-${props.mode==="dark"?"light":"dark"}`}>Enter Your Text !</span>
        <textarea
          className={`form-control bg-${props.mode} text-${props.mode==="dark"?"light":"dark"}`}
          aria-label="With textarea"
          rows={5}
          value={text} // Connect textarea to state
          onChange={handleTextChange} // Update state on change
        ></textarea>
      </div>
      <button
        onClick={() => handleTextTransform((text) => text.toUpperCase())}
        type="button"
        className="btn btn-outline-primary"
      >
        Upper-Case
      </button>
      <button
        onClick={() => handleTextTransform((text) => text.toLowerCase())}
        type="button"
        className="mx-4 my-3 btn btn-outline-primary"
      >
        Lower-Case
      </button>
      <button
        onClick={() =>
          handleTextTransform((text) =>
            text
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          )
        }
        type="button"
        className="mx-2 my-3 btn btn-outline-primary"
      >
        Capitalize-Case
      </button>
      <button
        onClick={handleCopyText}
        type="button"
        className="mx-3 my-3 btn btn-outline-primary"
      >
        Text-Copy
      </button>
      <button
        onClick={removeExtraSpace}
        type="button"
        className="mx-3 my-3 btn btn-outline-primary"
      >
        Remove-Extra-Space
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
