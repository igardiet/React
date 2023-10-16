import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/useContext/MainApp';
import { Navbar } from "../../src/useContext/Navbar";

describe( 'Tests in <MainApp />', () =>
{
    test( 'It must show the HomePage', () =>
    {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText( 'HomePage' ) ).toBeTruthy();
    } );

    test( 'It must show the LoginPage', () =>
    {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText( 'LoginPage' ) ).toBeTruthy();
        screen.debug();
    } );
} );