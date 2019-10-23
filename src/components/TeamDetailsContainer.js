import React from "react";
import TeamDetails from "./TeamDetails";
import { connect } from "react-redux";
import { loadTeam, deleteTeam } from "../actions/teams";
import CreatePlayerFormContainer from './CreatePlayerFormContainer'
import { Link } from "react-router-dom";

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
    return (
      <div>
        <TeamDetails team={this.props.team} onDelete={this.onDelete} />

        {this.props.loggedIn ? (
          <CreatePlayerFormContainer teamId={this.props.team.id} />
        ) : (
            <Link to="/login">Please log in to add players to this team.</Link>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.team,
  loggedIn: state.auth !== null
});

export default connect(
  mapStateToProps,
  { loadTeam, deleteTeam }
)(TeamDetailsContainer);
