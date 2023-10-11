import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/examples";

describe( 'Tests in <MultipleCustomHooks />', () =>
{
    test( 'It must show the default component', () =>
    {
        render( <MultipleCustomHooks /> );

        expect( screen.getByText( 'Loading...' ) );
        expect( screen.getByText( 'Quotes' ) );

        const nextButton = screen.getByRole( 'button', { name: 'Next Quote' } );
        expect( nextButton.disabled ).toBeTruthy();

        // screen.debug();
    } );
} );