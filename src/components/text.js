import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState(""); // Plain text
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setButtonDisabled(e.target.value.trim() === "");
  };

  const handleTextTransform = (transform) => {
    const newText = transform(text);
    setText(newText);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
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
        disabled={buttonDisabled}
      >
        Upper-Case
      </button>
      <button
        onClick={() => handleTextTransform((text) => text.toLowerCase())}
        type="button"
        className="mx-4 my-3 btn btn-outline-primary"
        disabled={buttonDisabled}
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
        disabled={buttonDisabled}
      >
        Capitalize-Case
      </button>
      <button
        onClick={handleCopyText}
        type="button"
        className="mx-3 my-3 btn btn-outline-primary"
        disabled={buttonDisabled}
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
