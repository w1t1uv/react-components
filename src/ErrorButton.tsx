import React from 'react';

class ErrorButton extends React.Component<unknown, unknown> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { hasError: false };
  }

  handleClick() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      throw new Error('Something went wrong :/');
    }

    return (
      <div className="wrapper error-button-wrapper">
        <button className="button error-button" onClick={this.handleClick}>
          press for error
        </button>
      </div>
    );
  }
}

export default ErrorButton;
