import { render, screen } from '@testing-library/react';
import Notification from './Notification';

test('renders text correctly based on the data being passed', () => {
  render(<Notification text="This is example text" />);
  const linkElement = screen.getByText(/This is example text/i);
  expect(linkElement).toBeInTheDocument();
});
