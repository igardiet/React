const { renderHook, act } = require( "@testing-library/react" );
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
        const { counter } = result.current;
        expect( counter ).toBe( 100 );
    } );

    test( 'It must increment the counter', () =>
    {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter, increment } = result.current;

        act( () =>
        {
            increment();
            increment( 2 );
        } );

        expect( result.current.counter ).toBe( 103 );
    } );

    test( 'It must decrement the counter', () =>
    {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter, decrement } = result.current;

        act( () =>
        {
            decrement();
            decrement( 2 );
        } );

        expect( result.current.counter ).toBe( 97 );
    } );

    test( 'It must reset the counter', () =>
    {
        const { result } = renderHook( () => useCounter( 0 ) );
        const { counter, decrement, reset } = result.current;

        act( () =>
        {
            decrement();
            reset();
        } );

        expect( result.current.counter ).toBe( 0 );
    } );
} );