import React from "react";
import Card from "../../components/Card/Card";
import Donations from "../../components/Donations/Donations";
import { connect } from "react-redux";
import "./Main.css";

function Main(props) {
  const cardsOutput = props.animals ? (
    props.animals.map(animal => <Card data={{ ...animal }} key={animal.id} />)
  ) : (
    <h2>Loading!</h2>
  );

  const donationsOutput = props.donations ? (
    props.donations.map(donation => (
      <Donations data={{ ...donation }} key={donation.id} />
    ))
  ) : (
    <h2>Loading!</h2>
  );

  return (
    <main className="Main">
      <section className="card-output">{cardsOutput}</section>
      <aside className="donations-output">{donationsOutput}</aside>
    </main>
  );
}

const mapStateToProps = store => ({
  animals: store.animals,
  donations: store.donations
});

export default connect(mapStateToProps)(Main);
