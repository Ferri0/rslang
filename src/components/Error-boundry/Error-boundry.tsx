import React, { Component, ReactChild } from 'react';
import { ErrorIndicator } from '../Error-indicator';

class ErrorBoundry extends Component {
  constructor(props: ReactChild) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render(): JSX.Element {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }
    const { children } = this.props;
    return children;
  }
}

export { ErrorBoundry };
