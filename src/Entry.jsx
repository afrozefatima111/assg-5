import React from "react";

function Entry(props) {
  return (
    <div className="emoji-entry">
      <div className="emoji">{props.emoji}</div>
      <div className="name">{props.name}</div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default Entry;
