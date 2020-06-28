import React, { Component } from 'react';

import store from './store';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,initListAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (

            <TodoListUI
            inputValue = {this.state.inputValue}
            handleInputChange = {this.handleInputChange}
            handleBtnClick = {this.handleBtnClick}
            handleItemDelete = {this.handleItemDelete}
            list = {this.state.list}
            />

        )
    }
    componentDidMount(){
        axios.get('/api/todolist.json').then((res)=>{
            const data =res.data;
            const action =initListAction(data)
            store.dispatch(action);
            console.log('componentDidMount',typeof(data),data)
        })
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        console.log(e.target.value);
        store.dispatch(action)
    }y
    handleStoreChange(){
        this.setState(store.getState());
        console.log('store change')
    }
    handleBtnClick(){

        const action = getAddItemAction(this.state.inputValue)
        console.log('--handleBtnClick',this.state)
        store.dispatch(action)
    }
    handleItemDelete(index){
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    
    }
}

export default TodoList;