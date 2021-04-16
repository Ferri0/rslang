import React, { Component } from 'react';
import { ErrorIndicator } from '../Error-indicator';

type MyState = {
  hasError: boolean;
};
type Children = {
  children: React.ReactNode;
};

class ErrorBoundry extends Component<Children, Readonly<MyState>> {
  constructor(props: Children) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render(): React.ReactNode {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }
    const { children } = this.props;
    return children;
  }
}

export { ErrorBoundry };
