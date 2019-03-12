import { Socket } from 'phoenix';

import reduxStore from './app';
import {
         clearStation,
         updateStation,
         addStation,
       } from './summary/actions';

// User token gets passed via script tag in layout/app.html
const socket = new Socket("/socket", {params: 1});

socket.connect();

export const stationChannel = socket.channel(`summary:stations`, {});
export const onTimeout = (response) => { console.log("There may be a networking error, the socket connection has timed out.", response) };
export const onError = (response) => { console.log("Something went wong, I should alert the user and retry:", response) };

export const requestStations = () => {
  stationChannel.push("request_stations")
    .receive("ok", ({stations}) => {
      console.log("BOOP", stations);
    })
    .receive("error", onError)
    .receive("timeout", onTimeout)
}
export default socket;
