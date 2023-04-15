import { Component } from 'react';

class Statistics extends Component {
  static defaultProps = {
    good:0,
    neutral:0,
    bad:0,
    total:0,
    positivePercentage:0,
  };

  render() {
    const{good} = this.props;
    const{neutral} = this.props;
    const{bad} = this.props;
    const{total} = this.props;
    const{positivePercentage} = this.props;

    return (
      <>
        <h2>Statistics</h2>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>Total: {total}</div>
        <div>Positive feedback: {positivePercentage}%</div>
      </>
    );
  }
}

export default Statistics;
