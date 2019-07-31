import React from "react";

export default function Donations(props) {
  return (
    <article>
      <h4>{props.data.name}</h4>
      <p>{props.data.donation}</p>
    </article>
  );
}
