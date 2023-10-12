import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock( '../../src/hooks/useFetch' );
jest.mock( '../../src/hooks/useCounter' );

describe( 'Tests in <MultipleCustomHooks />', () =>
{
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue(
        {
            counter: 1,
            increment: mockIncrement
        } );

    beforeEach( () =>
    {
        jest.clearAllMocks();
    } );

    test( 'It must show the default component', () =>
    {
        useFetch.mockReturnValue(
            {
                data: null,
                isLoading: true,
                hasError: null
            } );

        render( <MultipleCustomHooks /> );

        expect( screen.getByText( 'Loading...' ) );
        expect( screen.getByText( 'Quotes' ) );

        const nextButton = screen.getByRole( 'button', { name: 'Next Quote' } );
        expect( nextButton.disabled ).toBeTruthy();

        // screen.debug();
    } );

    test( 'It must show a quote', () =>
    {
        useFetch.mockReturnValue(
            {
                data: [{ author: 'George Orwell', quote: '1984' }],
                isLoading: false,
                hasError: null
            } );

        render( <MultipleCustomHooks /> );
        expect( screen.getByText( '1984' ) ).toBeTruthy();
        expect( screen.getByText( 'George Orwell' ) ).toBeTruthy();

        const nextButton = screen.getByRole( 'button', { name: 'Next Quote' } );
        expect( nextButton.disabled ).toBeFalsy();
    } );

    test( 'It must call the increment function', () =>
    {
        useFetch.mockReturnValue(
            {
                data: [{ author: 'Julio Cortazar', quote: 'Rayuela' }],
                isLoading: false,
                hasError: null
            } );


        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole( 'button', { name: 'Next Quote' } );
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();
    } );
} );