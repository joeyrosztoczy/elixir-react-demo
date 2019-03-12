import { Socket } from 'phoenix';

import { reduxStore } from './app';
import { addStations } from './summary/actions';

// User token gets passed via script tag in layout/app.html
const socket = new Socket("/socket", {params: 1});

socket.connect();

export const stationChannel = socket.channel(`summary:stations`, {});
export const onTimeout = (response) => {
  console.log("There may be a networking error, the socket connection has timed out.", response)
};
export const onError = (response) => {
  console.log("Something went wong, I should alert the user and retry:", response)
};

stationChannel.on("stations_updated", ({ stations} ) => {
  reduxStore.dispatch(addStations(stations));
});


export const requestStations = () => {
  stationChannel.push("request_stations")
    .receive("ok", ({ stations }) => {
      reduxStore.dispatch(addStations(stations));
    })
    .receive("error", onError)
    .receive("timeout", onTimeout)
}
export default socket;
