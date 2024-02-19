import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, clearAll } from "../Action/index";
import './todo.css';

const Todo = () => {

    const [inputData, setInputData] = useState("");
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch()

    return (<div className='listHolder'>
        <div>
            <h1>To-Do List</h1>
            <input className='inputField'
                type="text"
                placeholder="Add Tasks..."
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
            />
            {' '}
            <button className='addList' onClick={() => dispatch(addTodo(inputData), setInputData(''))}><b>+</b></button>
        </div>
        <div>
            {
                list.map((element) => {
                    return (<div className ="task" key={element.id}>
                        <h3>{element.data}</h3>
                        <button className='deleteList' onClick={() => dispatch(deleteTodo(element.id), setInputData(''))}><b>X</b></button>
                    </div>)
                })
            }
        </div>
    </div>)
}
export default Todo;