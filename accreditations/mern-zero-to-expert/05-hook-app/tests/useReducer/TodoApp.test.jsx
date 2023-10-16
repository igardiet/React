import { render, screen } from "@testing-library/react";
import { useTodos } from "../../src/hooks";
import { TodoApp } from "../../src/useReducer/TodoApp";

jest.mock( '../../src/hooks/useTodos' );

describe( 'Tests in <TodoApp />', () =>
{
    useTodos.mockReturnValue(
        {
            todos:
                [
                    { id: 1, description: 'Todo #1', done: false },
                    { id: 2, description: 'Todo #2', done: true }
                ],
            todosCount: 2,
            pendingTodosCount: 1,
            handleDeleteTodo: jest.fn(),
            handleToggleTodo: jest.fn(),
            handleNewTodo: jest.fn()
        } );

    test( 'It must show the component correctly', () =>
    {
        render( <TodoApp /> );
        // screen.debug();
        expect( screen.getByText( 'Todo #1' ) ).toBeTruthy();
        expect( screen.getByText( 'Todo #2' ) ).toBeTruthy();
        expect( screen.getByRole( 'textbox' ) ).toBeTruthy();
    } );
} );