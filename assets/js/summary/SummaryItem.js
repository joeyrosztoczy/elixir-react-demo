import 'phoenix_html';
import React from 'react';

// Do something cool with stations here
class SummaryItem extends React.Component {
  render() {
    const { station } = this.props;

    return (
      <div>
        <div>
          <div>
            <h3>Station ID: { station.station_id }</h3>
            <p># Available Docks: { station.num_docks_available }</p>
            <p># Available Bikes: { station.num_bikes_available }</p>
          </div>
        </div>
      </div>

    );
  }
}

export default SummaryItem;
