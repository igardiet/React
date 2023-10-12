import { todoReducer } from '../../src/useReducer/todoReducer';

describe( 'Tests in todoReducer', () =>
{
    const initialState =
        [{
            id: 1,
            description: 'Demo Todo',
            done: false
        }];

    test( 'It must return the initial state', () =>
    {
        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
    } );

    test( 'It must add a todo', () =>
    {
        const action =
        {
            type: 'Add Todo',
            payload:
            {
                id: 2,
                description: 'New todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    } );

    test( 'It must remove a todo', () =>
    {
        const action =
        {
            type: 'Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
    } );

    test( 'It must perform the todo toggle', () =>
    {
        const action =
        {
            type: 'Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );
    } );
} );