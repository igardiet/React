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

    
} );