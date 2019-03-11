import {
          CLEAR_DEVICE,
          ADD_DEVICE_SUMMARY,
          SET_INITIAL_STATE,
          UPDATE_DEVICE_MARKER,
          UPDATE_DEVICE_TRAIL,
          UPDATE_DEVICE_SEGMENT,
          UPDATE_DEVICE_SPEED,
          UPDATE_DEVICE_SUMMARY,
          UPDATE_POPUP_DEVICE
       } from './actions';

export default function reducer(state = {}, {type, payload}) {
  switch(type) {
    case SET_INITIAL_STATE:
      return { ...state, history: payload };
    case CLEAR_DEVICE:
      const new_history = state.history.filter(({device_id}) => {
        return device_id != payload;
      })
      return { ...state, history: new_history};
    case UPDATE_DEVICE_MARKER:
      const updatedMarkers = (state.history || []).map(device => {
        if (device.device_id === payload.id) {
          device.marker = payload.marker;
        }
        return device;
      });
      return { ...state, history: updatedMarkers};
    case UPDATE_DEVICE_TRAIL:
      const updatedTrails = (state.history || []).map(device => {
        if (device.device_id === payload.id) {
          device.trail = payload.trail;
        }
        return device;
      });
      return { ...state, history: updatedTrails};
    case UPDATE_DEVICE_SEGMENT:
      return { ...state, history: payload };
    case ADD_DEVICE_SUMMARY:
      const stateHistory = state.history || [];
      return { ...state, history: [...stateHistory, payload] };
    case UPDATE_DEVICE_SUMMARY:
      const history = state.history.map(device_history => {
        if (device_history.device_id !== payload.device_id) {
          return device_history;
        } else {
          return { ...device_history, ...payload };
        }
      });
      return { ...state, history };
    case UPDATE_DEVICE_SPEED:
      const company_history = (state.history || []).map(device_history => {
        if (device_history.device_id !== payload.device_id) {
          return device_history;
        } else {
          return { ...device_history, ...payload };
        }
      });
      return { ...state, history: company_history };
    case UPDATE_POPUP_DEVICE:
      return { ...state, popupDevice: payload };
    default:
      return state;
  }
};
