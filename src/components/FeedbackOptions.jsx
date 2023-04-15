import { Component } from 'react';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: 0,
  };

  render() {
    
    return (
      <>
        <h1>Please leave feedback</h1>
        <button type="button" /*onClick={this.clickGood}*/ style={{ margin: 5 }}>
          Good
        </button>
        <button type="button" /*onClick={this.clickNeutral}*/ style={{ margin: 5 }}>
          Neutral
        </button>
        <button type="button" /*onClick={this.clickBad}*/ style={{ margin: 5 }}>
          Bad
        </button>
      </>
    );
  }
}

export default FeedbackOptions;
