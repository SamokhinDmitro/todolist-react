import React from "react";
import deleteImg from "./delete.svg";
import './TodoItem.sass';

const TodoItem = props => {

    const cls = ['todo-item'];

    if(props.done){
        cls.push('todo-item__done')
    }

    return (
        <li className={cls.join(' ')}>
            <label className="checkbox">
                <input type="checkbox" className="checkbox__real"
                       checked={props.done}
                       onChange={props.taskDone}
                       name="value-01"
                       value="1"
                />
                <span className="checkbox__fake"/>
                <span className="checkbox__title">{props.title}</span>
            </label>
            <button className="todo-item__close" onClick={props.removeTask}>
                <img src={deleteImg} alt="Delete"/>
            </button>
        </li>
    );


}

export default TodoItem;
