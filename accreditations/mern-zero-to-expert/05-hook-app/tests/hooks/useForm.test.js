const { renderHook, act } = require( '@testing-library/react' );
const { useForm } = require( '../../src/hooks/useForm' );

describe( 'Tests in useFrom', () =>
{
    const initialForm =
    {
        name: 'Ignatius',
        email: 'ignatius@gmail.com'
    };

    test( 'It must return default values', () =>
    {
        const { result } = renderHook( () => useForm( initialForm ) );

        expect( result.current ).toEqual(
            {
                name: initialForm.name,
                email: initialForm.email,
                formState: initialForm,
                onInputChange: expect.any( Function ),
                onResetForm: expect.any( Function )
            } );
    } );

    test( 'It must change the name of the form', () =>
    {
        const newValue = 'John';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;

        act( () =>
        {
            onInputChange( { target: { name: 'name', value: newValue } } );
        } );

        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );
    } );

    test( 'it must reset the form', () =>
    {
        const newValue = 'John';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;

        act( () =>
        {
            onInputChange( { target: { name: 'name', value: newValue } } );
            onResetForm();
        } );

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );
    } );
} );