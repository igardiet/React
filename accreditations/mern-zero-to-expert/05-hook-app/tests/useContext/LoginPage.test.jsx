import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/useContext/context/UserContext';
import { LoginPage } from '../../src/useContext/LoginPage';

describe( 'Tests in <LoginPage />', () =>
{
    test( 'It must show the component without the user', () =>
    {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText( 'pre' );
        expect( preTag.innerHTML ).toBe( 'null' );
    } );

    test( 'It must call the setUser when the button is clicked', () =>
    {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole( 'button' );
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith(
            {
                id: 123, name: 'Bruce', email: 'brucew@gmail.com'
            } );
    } );
} );