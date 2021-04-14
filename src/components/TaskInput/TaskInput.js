import React from "react";


export default class TaskInput extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    changeInput = event => {
       this.setState({input: event.target.value});
    }

    //Отправка задачи по нажатию Enter
    sendTask = event => {
        if(event.key === 'Enter'){
            if(this.state.input.trim().length > 0){
                this.props.addTask(this.state.input);
                this.setState({input: ''});
            }
        }
    }

    render() {
        return (
            <input
                type="text"
                className="form-control add-task"
                placeholder="New Task..."
                value={this.state.input}
                onChange={this.changeInput}
                onKeyPress={this.sendTask}
            />
        );
    }
}
