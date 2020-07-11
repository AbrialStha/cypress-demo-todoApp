import React, { Component } from 'react'

interface Props {
    addTodo: (todo: string) => void
}

class TextField extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            todo: ""
        }
    }

    changeInput = (e: { target: { value: any; }; }) => {
        this.setState({
            todo: e.target.value
        })
    }

    add = () => {
        this.props.addTodo(this.state.todo)
        this.setState({
            todo: ""
        })
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input className="input-group-text" style={{ width: "60%" }} type="text" value={this.state.todo} onChange={this.changeInput} />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={this.add}>Add</button>
                </div>
            </div>
        )
    }
}

export default TextField