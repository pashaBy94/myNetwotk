import { render, screen } from '@testing-library/react';
import AppFull from './App';

test('renders learn react link', () => {
    render(<AppFull />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
