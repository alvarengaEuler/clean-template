import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App component', () => {
  it('should render the button with correct text', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
