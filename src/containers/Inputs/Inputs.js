import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./Inputs.css";

class Inputs extends Component {
  state = {
    donorName: "",
    donation: ""
  };

  collectInputs = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postDonor();
  };

  postDonor = async () => {
    const donorInfo = {
      id: Date.now(),
      name: this.state.donorName,
      donation: this.state.donation
    };
    const response = await fetch("http://localhost:3001/api/v1/donations/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(donorInfo)
    });
    this.props.updateDonations(await response.json());
  };

  render() {
    return (
      <section className="Inputs">
        <form>
          <input
            type="text"
            name="donorName"
            value={this.state.donorName}
            onChange={this.collectInputs}
            autoComplete="off"
          />
          <input
            type="text"
            name="donation"
            value={this.state.donation}
            onChange={this.collectInputs}
            autoComplete="off"
          />
          <button className="main-btn" onClick={this.handleSubmit}>
            Donate!
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateDonations: donation => dispatch(actions.updateDonations(donation))
});

export default connect(
  null,
  mapDispatchToProps
)(Inputs);
