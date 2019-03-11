export const ADD_DEVICE_SUMMARY= 'ADD_DEVICE_SUMMARY';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const CLEAR_DEVICE = 'CLEAR_DEVICE';
export const UPDATE_DEVICE_MARKER = 'UPDATE_DEVICE_MARKER';
export const UPDATE_DEVICE_TRAIL = 'UPDATE_DEVICE_TRAIL';
export const UPDATE_DEVICE_SEGMENT = 'UPDATE_DEVICE_SEGMENT';
export const UPDATE_DEVICE_SUMMARY= 'UPDATE_DEVICE_SUMMARY';
export const UPDATE_DEVICE_SPEED = 'UPDATE_DEVICE_SPEED';
export const UPDATE_POPUP_DEVICE = 'UPDATE_POPUP_DEVICE';

export function setInitialState(payload) {
  return {
    type: SET_INITIAL_STATE,
    payload: payload,
  };
}

export function clearDevice(payload) {
  return {
    type: CLEAR_DEVICE,
    payload: payload
  };
}

export function updateDeviceSegment(payload) {
  return {
    type: UPDATE_DEVICE_SEGMENT,
    payload: payload
  };
}

export function updateDeviceSpeed(payload) {
  // Speed comes in at meters per second, convert to mph
  const metersPerSecondToMPH = 2.23694;
  const speed = payload.speed * metersPerSecondToMPH;
  const device_id = payload.device_id;

  return {
    type: UPDATE_DEVICE_SPEED,
    payload: { device_id, speed } 
  };
}

export function addDeviceSummary(payload) {
  return {
    type: ADD_DEVICE_SUMMARY,
    payload: payload
  };
}

export function updateDeviceSummary(payload) {
  return {
    type: UPDATE_DEVICE_SUMMARY,
    payload: payload
  };
}

export function updateDeviceMarker(payload) {
  return {
    type: UPDATE_DEVICE_MARKER,
    payload: payload
  };
}

export function updateDeviceTrail(payload) {
  return {
    type: UPDATE_DEVICE_TRAIL,
    payload: payload
  };
}

export function updatePopupDevice(payload) {
  return {
    type: UPDATE_POPUP_DEVICE,
    payload: payload
  };
}
