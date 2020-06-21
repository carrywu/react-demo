import React, { Component, Fragment } from 'react';

import TodoItem from './TodoItem'
import './style.css'
import axios from 'axios'
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    //在组件即将被挂载到页面到时刻
     componentWillMount (){
         console.log('componentWillMount')
     }   
    render() {
        console.log('render ')
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容 </label>
                    <input id="insertArea" className='input' value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment >
        )
    }
    //挂载之后
    componentDidMount (){
        axios.get('/api/todolist')
        .then((res)=>{
            alert('succ')
        })
        .catch((e)=>{
            alert(e)
        })
        console.log('---componentDidMount')
    }
     
    getTodoItem() {
       return  this.state.list.map((item, index) => {
            return (

                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                
            )
        })
    }
    handleInputChange(e) {
        const value = e.target.value
        this.setState(()=>({
            inputValue: value
        }))
        console.log(e.target.value, this);
    }
    handleBtnClick() {
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState((prevState)=>{
           const list = [...prevState.list];
           list.splice(index,1)
           return {list}
        })
        this.setState({
            list: list
        })
        console.log(index)
    }
}
export default TodoList;  