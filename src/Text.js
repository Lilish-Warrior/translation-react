import React, { useState } from "react";
import Translation from "./Translation";
import "./Text.css";

export default function Text() {
  const [text, setText] = useState(null);

  function storetext(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Text">
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit} className="form-label">
            <input
              type="search"
              placeholder="Search for a word..."
              autoFocus="on"
              onChange={storetext}
              className="form-control input"
            />
          </form>
        </div>
        <div className="col-6">
          <div className="container">
            <Translation text={text} />
          </div>
        </div>
      </div>
    </div>
  );
}
