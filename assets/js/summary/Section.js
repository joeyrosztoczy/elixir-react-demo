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
    const { field, stations } = this.props;

    return (
      <div className="dashboard--summary-section">
        <div className="dashboard--summary-header">
          <div className="header-left">
            <h2 onClick={ () => DashboardHelper.zoomToField(field) }>{ field } <span className="dot-spacer">&#183;</span></h2>
            <p className="p-lg gray">{ stations.length } equipment</p>
          </div>
          <div className="header-right">
            <i 
              className={ `toggle-content mdi ${this.state.contentExpanded ? 'mdi-content-remove' : 'mdi-content-add'}` }
              onClick={ () => this.toggleContent() }>
            </i>
          </div>
        </div>
        <AnimateHeight
          duration={ 300 }
          height={ this.state.contentHeight }>
          <div className="dashboard--summary-content">
            { this.displaySummaryItems(stations) }
          </div>
        </AnimateHeight>
        <hr className="section-divider" />
      </div>
    );
  }
}

export default SummarySection;
