import { PLAYER_CREATE_SUCCESS } from "../actions/players";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case PLAYER_CREATE_SUCCESS:
      return { ...action.payload };

    case "DELETE_PLAYER":
      return {};

    default:
      return state;
  }
};
