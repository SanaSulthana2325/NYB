import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Counter from './Counter';

describe('Counter Component', () => {
  it('increases count when button is clicked', () => {
    render(<Counter />);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', { name: 'Increase Count' })
    );

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});