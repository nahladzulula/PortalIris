// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PortalIris title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PortalIris/i);
    expect(titleElement).toBeInTheDocument();
});
