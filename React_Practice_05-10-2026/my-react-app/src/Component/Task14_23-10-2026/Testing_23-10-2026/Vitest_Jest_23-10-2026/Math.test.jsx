import { describe, it, expect } from 'vitest';
import { Add } from './Math';

describe('Add function', () => {
  it('adds two numbers', () => {
    expect(Add(2, 3)).toBe(5);
  });
});