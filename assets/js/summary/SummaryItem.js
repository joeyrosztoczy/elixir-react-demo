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
            <span>{ station.station_id }</span>
            <span>{ station.num_docks_available }</span>
            <span>{ station.num_bikes_available }</span>
          </div>
        </div>
      </div>

    );
  }
}

export default SummaryItem;
