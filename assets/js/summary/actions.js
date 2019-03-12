export const ADD_STATIONS= 'ADD_STATIONS';

export function addStations(payload) {
  return {
    type: ADD_STATIONS,
    payload: payload,
  };
}

