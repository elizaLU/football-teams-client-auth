import React from "react";

function TeamDetails(props) {
  if (!props.team.name) return "Loading";

  return (
    <div>
      {props.team.name}
      <ul>
        {props.team.players.map(player => {
          return (
            <li key={player.id}>
              {player.number} : {player.name}
            </li>
          );
        })}
      </ul>
      <button onClick={props.onDelete}>DELETE TEAM</button>
    </div>
  );
}

export default TeamDetails;
