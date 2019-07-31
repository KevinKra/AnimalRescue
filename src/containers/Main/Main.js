import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Donations from "../../components/Donations/Donations";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions/";
import * as apiCalls from "../../_api/";
import "./Main.css";

export class Main extends Component {
  state = {};

  async componentDidMount() {
    this.props.collectAnimals(await apiCalls.fetchData("rescue-animals"));
    this.props.collectDonations(await apiCalls.fetchData("donations"));
  }

  render() {
    const cardsOutput = this.props.animals ? (
      this.props.animals.map(animal => (
        <Card data={{ ...animal }} key={animal.id} />
      ))
    ) : (
      <h2>Loading!</h2>
    );

    const donationsOutput = this.props.donations ? (
      this.props.donations.map(donation => (
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
}

const mapStateToProps = store => ({
  animals: store.animals,
  donations: store.donations
});

const mapDispatchToProps = dispatch => ({
  collectAnimals: animals => dispatch(actions.collectAnimals(animals)),
  collectDonations: donations => dispatch(actions.collectDonations(donations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
