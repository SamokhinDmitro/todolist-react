import React from "react";
import TaskInput from "../TaskInput/TaskInput";
import TodoItem from "../TodoItem/TodoItem";
import './Home.sass';
import Navigation from "../Navigation/Navigation";


export default class Home extends React.Component{
    constructor(props){
        super(props);

        this.state={
            tasks: [
                {title: 'Задача1', done: false},
                {title: 'Задача2', done: false},
                {title: 'Задача3', done: true},
                {title: 'Задача4', done: false}
            ]
        };
    }


    taskDoneHandler = index => {
        const task = this.state.tasks[index].done;

        const tasks = this.state.tasks.concat();
        tasks[index].done = !task;

        this.setState({tasks: tasks});
    }

    removeTaskHandler = index => {
        const tasks = this.state.tasks.concat();
        tasks.splice(index, 1);
        this.setState({tasks: tasks});
    }

    addTaskHandler = text => {
        let task = {
            title: text,
            done: false
        };

        const tasks = this.state.tasks.concat();
        tasks.push(task);
        this.setState({tasks: tasks});
    }

    render() {
        return (
            <React.Fragment>
            <Navigation/>

            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card card-white ">
                            <div className="card-body">

                                <TaskInput addTask={this.addTaskHandler}/>

                                <ul className="todo-list">

                                    {this.state.tasks.length
                                        ?
                                        this.state.tasks.map((task, index) => {
                                            return (
                                                <TodoItem
                                                    key={index}
                                                    title={task.title}
                                                    done={task.done}
                                                    taskDone={() => this.taskDoneHandler(index)}
                                                    removeTask={this.removeTaskHandler.bind(this, index)}
                                                />
                                            );
                                        })
                                        : <li className="todo-item">
                                            Нет задач
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
