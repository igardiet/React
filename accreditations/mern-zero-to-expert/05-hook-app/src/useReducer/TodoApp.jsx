import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState =
    [

    ];

const init = () =>
{
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
};

export const TodoApp = () =>
{
    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    useEffect( () =>
    {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos] );

    const handleNewTodo = ( todo ) =>
    {
        const action =
        {
            type: 'Add Todo',
            payload: todo
        };
        dispatch( action );
    };

    const handleDeleteTodo = ( id ) =>
    {
        dispatch(
            {
                type: 'Remove Todo',
                payload: id
            } );
    };

    const handleToggleTodo = ( id ) =>
    {
        dispatch(
            {
                type: 'Toggle Todo',
                payload: id
            } );
    };

    return (
        <>
            <h1>TodoApp: 10 |<small>Pending: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Add Task</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};