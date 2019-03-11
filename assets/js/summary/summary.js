import 'phoenix_html';
import React from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';

import { summaryChannel, onError, onTimeout } from '../socket.js';
import SummarySection from './SummarySection';

class Summary extends React.Component {
  componentDidMount() {
    summaryChannel.join()
      .receive("ok", resp => {
        console.log("Joined dashboard channel successfully.");
        // Do something cool 
      })
      .receive("error", onError)
      .receive("timeout", onTimeout)
  }

  render() {
    return (
      <div>
       <SummarySection />
      </div>
    );
  }
}

const mapStateToProps = ({ summary })=> ({
  stations: summary.stations
})

export default connect(
  mapStateToProps,
  null
)(Summary)
