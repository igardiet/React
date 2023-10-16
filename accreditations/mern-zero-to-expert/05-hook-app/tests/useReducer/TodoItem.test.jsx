import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/useReducer/TodoItem';

describe( 'Tests in <TodoItem />', () =>
{
    const todo =
    {
        id: 1,
        description: '',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test( 'It must show the pending complete todo', () =>
    {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole( 'listitem' );
        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' );

        const spanElement = screen.getByLabelText( 'span' );
        expect( spanElement.className ).toContain( 'align-self-center' );
        expect( spanElement.className ).not.toContain( 'text-decoration-line-through' );
    } );

    test( 'It must show the completed todo', () =>
    {
        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText( 'span' );
        expect( spanElement.className ).toContain( 'text-decoration-line-through' );
    } );

    test( 'Span must call ToggleTodo when clicked', () =>
    {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText( 'span' );
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    } );

    test( 'Button must call deleteTodo', () =>
    {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const deleteButton = screen.getByRole( 'button' );
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    } );
} );