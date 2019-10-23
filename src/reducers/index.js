import { combineReducers } from "redux";
import teams from "./teams";
import team from "./team";
import auth from "./auth";
import players from "./players"

export default combineReducers({
  teams,
  team,
  auth,
  players
});
