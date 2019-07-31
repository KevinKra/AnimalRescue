import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <article className="animal-card">
      <h3>{props.data.name}</h3>
      <h4>{props.data.species}</h4>
      <p>{props.data.description}</p>
      <img src={props.data.img} alt={props.data.name} />
    </article>
  );
}
