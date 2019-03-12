import { ADD_STATIONS } from './actions';

export default function reducer(state = {}, {type, payload}) {
  switch(type) {
    case ADD_STATIONS:
      return { ...state, stations: payload };
    default:
      return state;
  }
};
