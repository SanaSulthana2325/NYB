import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default Counter;



// React Testing Library
// Meaning: React Testing Library (RTL) is a library that helps us test React components by interacting with them the way a real user would.

// It provides functions such as:
// - render() — displays a component in the test environment.
// - screen — searches for elements on the page.
// - getByText() — finds an element by its visible text.
// - getByRole() — finds an element by its role, such as a button.
// - fireEvent and userEvent — simulate user interactions.