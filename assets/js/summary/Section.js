import 'phoenix_html';
import React from 'react';
import AnimateHeight from 'react-animate-height';

import SummaryItem from './SummaryItem';

class SummarySection extends React.Component {
  state = {
    contentExpanded: true,
    contentHeight: 'auto'
  }

  toggleContent = () => {
    this.setState({ contentExpanded: !this.state.contentExpanded });
    this.setState({ contentHeight: this.state.contentHeight == 0 ? 'auto' : 0 });
  }

  displaySummaryItems = (stations) => {
    const summaryItems = stations.map((station, i) => {
      return <SummaryItem key={ i } station={ station } />;
    })

    return summaryItems;
  }
  
  render() {
    const { stations } = this.props;

    return (
      <div className="dashboard--summary-section">
        <div className="dashboard--summary-header">
          <div className="header-left">
          </div>
          <div className="header-right">
          </div>
        </div>
        <AnimateHeight
          duration={ 300 }
          height={ this.state.contentHeight }>
          <div className="dashboard--summary-content">
            { this.displaySummaryItems([]) }
          </div>
        </AnimateHeight>
        <hr className="section-divider" />
      </div>
    );
  }
}

export default SummarySection;
