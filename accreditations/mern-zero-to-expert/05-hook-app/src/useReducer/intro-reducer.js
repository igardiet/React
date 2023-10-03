const initialState =
    [{
        id: 1,
        todo: 'Learn React',
        done: false
    }];

const todoReducer = ( state = initialState, action = {} ) =>
{
    if ( action.type === '[TODO] add todo' )
    {
        return [...state, action.payload];
    }
    return state;
};

let todos = todoReducer();

const newTodo =
{
    id: 2,
    todo: 'Learn Node',
    done: false
};

const addTodoAction =
{
    type: '[TODO] add todo',
    payload: newTodo
};

todos = todoReducer( todos, addTodoAction );

console.log( { state: todos } );