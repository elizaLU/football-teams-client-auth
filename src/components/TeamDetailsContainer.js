import React from "react";
import TeamDetails from "./TeamDetails";
import { connect } from "react-redux";
import { loadTeam, deleteTeam } from "../actions/teams";

class TeamDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id));
  }

  onDelete = () => {
    this.props.deleteTeam(this.props.team)
    this.props.history.push('/teams');
  }

  render() {
    console.log(this.props.team);
    return <TeamDetails team={this.props.team} onDelete={this.onDelete} />;
  }
}



const mapStateToProps = state => ({
  team: state.team
});

export default connect(
  mapStateToProps,
  { loadTeam, deleteTeam }
)(TeamDetailsContainer);
