import React from "react";
import "./Donations.css";

export default function Donations(props) {
  return (
    <article className="donation">
      <h4>{props.data.name}</h4>
      <p>{props.data.donation}</p>
    </article>
  );
}
