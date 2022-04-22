/* eslint-disable */
// Import dependencies
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Resume from '..';
import resume from '../../../assets/images/portfolioImages/resume.pdf';

// After each test, make sure there isnt any leftover memory that could give you false results
afterEach(cleanup);

// Declare the components you are testing
describe('Resume component', () => {
  // verify the component is rendering properly
  it('Resume component renders', () => {
    render(<Resume />);
  });

  // compare snapshot versions of the DOM node structure
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Resume />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('resume link navigates to resume when clicked', () => {
  const {getByText} = render(<a href={resume} target="_blank" rel="noreferrer"><h3 className="pb-5">Download Resume</h3></a>);

  const link = getByText('Download Resume');

  fireEvent.click(link);

  expect(getByText('Download Resume').closest('a')).toHaveAttribute('href', resume)
});
