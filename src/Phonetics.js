import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <h3>{props.phonetics.text}</h3>
    </div>
  );
}
