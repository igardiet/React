import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState =
    [
        {
            id: new Date().getTime(),
            description: 'Task nº1',
            done: false
        },
        {
            id: new Date().getTime() * 3,
            description: 'Task nº2',
            done: false
        }
    ];

export const TodoApp = () =>
{
    const [todos, dispatch] = useReducer( todoReducer, initialState );

    return (
        <>
            <h1>TodoApp: 10 |<small>Pending: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="align-self-center">Item 1</span>
                            <button className="btn btn-danger">Delete</button>
                        </li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Add Task</h4>
                    <hr />
                    <form>
                        <input type="text" className="form-control" placeholder="What is there to do ?" />
                        <button type="submit" className="btn btn-outline-primary mt-1">Add</button>
                    </form>
                </div>
            </div>
        </>
    );
};