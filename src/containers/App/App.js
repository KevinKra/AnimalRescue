import React, { Component } from "react";
import Inputs from "../Inputs/Inputs";
import Main from "../Main/Main";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions/";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    this.props.collectAnimals(await this.fetchData("rescue-animals"));
    this.props.collectDonations(await this.fetchData("donations"));
  }

  fetchData = async endpoint => {
    this.props.isLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/api/v1/${endpoint}`);
      this.props.isLoading(false);
      return await response.json();
    } catch (error) {
      this.props.isLoading(false);
      this.props.hasErrored(error.message);
    }
  };
  render() {
    return (
      <div className="App">
        <header>
          <h3>Animal Rescue</h3>
          <Inputs />
          <Main />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  collectAnimals: animals => dispatch(actions.collectAnimals(animals)),
  collectDonations: donations => dispatch(actions.collectDonations(donations)),
  isLoading: loading => dispatch(actions.isLoading(loading)),
  hasErrored: error => dispatch(actions.hasErrored(error))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
