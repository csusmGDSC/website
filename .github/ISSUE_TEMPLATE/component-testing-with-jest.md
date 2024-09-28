---
name: Component Testing with Jest
about: A issue template for component testing with React and Jest
title: "[COMPONENT TESTING] - Name of Component"
labels: good first issue, testing
assignees: ''

---

We need to write Jest test cases for the <ComponentName> component. The goal of this issue is to ensure that the component functions as expected by testing its rendering, behavior, and edge cases.

Acceptance Criteria
- [ ] Write test cases for all key functionalities of the <ComponentName> component.
- [ ] Ensure the component renders correctly.
- [ ] Test props, state, and any side effects (e.g., events, hooks).
- [ ] Include snapshot testing (if applicable).
- [ ] Ensure tests pass without errors or warnings.

Testing Instructions
- Clone the repository and set up the development environment by following the instructions in the README.
- Find the component located at /components/<Main | UI>
- Create a new test file __tests__/components/<ComponentName>.tsx
- Implement the test cases as described in the acceptance criteria.
- Run the test suite using npm run test inside the terminal
- Ensure that all tests pass before submitting a PR.

Additional Resources
[Jest Documentation](https://jestjs.io/docs/getting-started)

To get you started, here is some example code with Jest, feel free to use these or the docs,
```tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for extra matchers like `toBeInTheDocument`
import { <ComponentName> } from '../path/to/component';

describe('<ComponentName> Component Tests', () => {
  
  it('renders without crashing', () => {
    render(<ComponentName />);
    const element = screen.getByTestId('<component-testid>');
    expect(element).toBeInTheDocument();
  });

  it('renders with correct props', () => {
    const { getByText } = render(<ComponentName propName="Test Prop" />);
    expect(getByText('Test Prop')).toBeInTheDocument();
  });

  it('handles click event correctly', () => {
    const handleClick = jest.fn();
    render(<ComponentName onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Add more specific tests for the component as needed
  
  it('matches snapshot', () => {
    const { asFragment } = render(<ComponentName />);
    expect(asFragment()).toMatchSnapshot();
  });
});
```
