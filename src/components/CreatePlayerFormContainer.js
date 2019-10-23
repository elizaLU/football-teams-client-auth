import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPlayer } from "../actions/players";
import CreatePlayerForm from "./CreatePlayerForm";

export class CreatePlayerFormContainer extends Component {
  state = {
    name: "",
    number: ""
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    console.table(this.state);//very cool
    event.preventDefault();
    this.props.createPlayer({
      ...this.state,
      teamId: this.props.teamId
    });
    this.setState({
      name: "",
      number: ""
    });
  };
  render() {
    return (
      <div>
        <CreatePlayerForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />

      </div>
    )
  }
}



export default connect(null, { createPlayer })(CreatePlayerFormContainer)
