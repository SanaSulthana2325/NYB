import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Employee from './Employee';

describe('Employee Component', () => {
  it('renders Employee details correctly', () => {
    render(<Employee />);

    expect(
      screen.getByText('Employee Details')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Name: Rahul')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Email: rahul@gmail.com')
    ).toBeInTheDocument();
  });
});