import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import Emp1 from './Emp1';

describe('Emp1 Component', () => {
  it('displays the correct props', () => {
    render(
      <Emp1
        name="Sana"
        role="Frontend Developer"
      />
    );

    expect(
      screen.getByText('Name: Sana')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Role: Frontend Developer')
    ).toBeInTheDocument();
  });
});