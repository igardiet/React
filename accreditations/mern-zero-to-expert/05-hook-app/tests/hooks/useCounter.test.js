const { renderHook } = require( "@testing-library/react" );
const { useCounter } = require( "../../src/hooks/useCounter" );

describe( 'Tests in useCounter', () =>
{
    test( 'It must return default values', () =>
    {
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe( 0 );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    } );

    test( 'It must generate the counter with a value of 100', () =>
    {
        const { result } = renderHook( () => useCounter( 100 ) );
        expect( result.current.counter ).toBe( 100 );
    } );
} );