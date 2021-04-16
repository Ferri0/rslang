import React from 'react';
import { render } from '../../utils/test-utils';

import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('should render', () => {
    render(<Spinner />);
  });
});
