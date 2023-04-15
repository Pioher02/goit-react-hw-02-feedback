import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  clickGood = () => {
    this.setState(state => {
      return {
        good: state.good + 1,
      };
    }, this.countPositiveFeedbackPercentage);
  };

  clickBad = () => {
    this.setState(state => {
      return {
        bad: state.bad + 1,
      };
    }, this.countTotalFeedback);
  };

  clickNeutral = () => {
    this.setState(state => {
      return {
        neutral: state.neutral + 1,
      };
    }, this.countTotalFeedback);
  };

  countTotalFeedback = () => {
    this.setState({
      total: this.state.good + this.state.bad + this.state.neutral,
    });
  };

  countPositiveFeedbackPercentage() {
    this.countTotalFeedback();

    this.setState({
      positiveFeedback: Math.round((this.state.good / (this.state.total + 1))*100)
    });
    console.log(this.state.positiveFeedback)
  }

  render() {
    return (
      <div>
       
        <FeedbackOptions options={this.state} />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.state.positiveFeedback}></Statistics>
      </div>
    );
  }
}

export default App;
