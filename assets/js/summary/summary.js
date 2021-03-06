import 'phoenix_html';
import React from 'react';
import _ from 'lodash';

import { connect, dispatch } from 'react-redux';

import { requestStations, stationChannel, onError, onTimeout } from '../socket.js';
import Section from './Section';

class Summary extends React.Component {
  componentDidMount() {
    stationChannel.join()
      .receive("ok", resp => {
        console.log("Joined dashboard channel successfully.");
        requestStations();
      })
      .receive("error", onError)
      .receive("timeout", onTimeout)
  }

  render() {
    return (
      <div>
       <Section stations={this.props.stations} />
      </div>
    );
  }
}

const mapStateToProps = ({ summary })=> ({
  stations: summary.stations
})

const mapDispatchToProps = dispatch => {
  return {
    addStations: stations => dispatch(addStations(stations)),
  } 
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary)
