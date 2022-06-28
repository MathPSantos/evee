import { render } from '@testing-library/react';
import { Button } from './Button.component';

test('sum', () => {
  const { getByText } = render(<Button>Test Textt</Button>);

  expect(getByText('Test Textt')).toBeInTheDocument();
});
