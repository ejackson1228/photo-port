import React from "react";
import {render, cleanup, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from "..";

afterEach(cleanup);


describe('ContactForm is rendering', () => {
    it('renders', () => {
        render(<Contact />)
    })

    it('renders', () => {
        const { asFragment } = render(<Contact/>)
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('matches text content', () => {
    it('matches h1 tag text to be "Contact Me"', () => {
        const { getByTestId } = render(<Contact /> )
        expect(getByTestId("contact-header")).toHaveTextContent('Contact Me');
    })

    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})

