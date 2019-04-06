import { FETCH_CARS, FETCH_CAR } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_CARS: {
      return action.payload;
    }
    case FETCH_CAR: {
      return [ action.payload ];
    }
    // case CREATE_CAR: {
    // const copiedState = state.slice(0);
    // copiedState.push(action.payload);
    // return copiedState;
    // }
    default:
      return state
  }
}
