import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/useContext/context/UserContext';
import { HomePage } from "../../src/useContext/HomePage";

describe( 'Tests in <HomePage />', () =>
{
    const user =
    {
        id: 1,
        name: 'Bruce'
    };

    test( 'It must show the component without the user', () =>
    {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText( 'pre' );
        expect( preTag.innerHTML ).toBe( 'null' );
        // screen.debug();
    } );

    test( 'It must show the component with the user', () =>
    {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText( 'pre' );
        expect( preTag.innerHTML ).toContain( user.id.toString() );
        expect( preTag.innerHTML ).toContain( user.name );
        // screen.debug();
    } );
} );