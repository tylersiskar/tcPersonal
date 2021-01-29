import { FETCH_POSTS } from '../actions/index';
const INITIAL_STATE = { all: [] };
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POSTS:
    return { ...state, ...action.payload };
  default:
    return state;
  }
}