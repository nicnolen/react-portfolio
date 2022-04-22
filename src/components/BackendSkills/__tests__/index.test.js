// Import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BackendSkills from '..';

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('BackendSkills component', () => {
  // verify the component is rendering properly
  it('BackendSkills component renders', () => {
    render(<BackendSkills />);
  });

  // compare snapshot versions of the DOM node structure
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<BackendSkills />);
    // compare whether expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  });
});
