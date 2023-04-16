import { Component } from 'react';

class Section extends Component {
  static defaultProps = {
    title: '',
    children: {},
  };
  render() {
    const { title } = this.props;
    const { children } = this.props;
    return (
      <>
        <h1>{title}</h1>
        {children}
      </>
    );
  }
}

export default Section;
