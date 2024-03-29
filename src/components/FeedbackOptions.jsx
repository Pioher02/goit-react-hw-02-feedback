import { Component } from 'react';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: {},
    onLeaveFeedback: 0,
  };
  render() {
    const { options } = this.props;
    const nameButtons = Object.keys(options);
    const { onLeaveFeedback } = this.props;

    return (
      <ul style={{ display: 'flex', padding: 0 }}>
        {nameButtons.map((nameButton, index) => (
          <li key={index} style={{ listStyleType: 'none', margin: '5px' }}>
            <button
              type="button"
              onClick={() => {
                onLeaveFeedback(nameButton);
              }}
              style={{ textTransform: 'capitalize' }}
            >
              {nameButton}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default FeedbackOptions;
