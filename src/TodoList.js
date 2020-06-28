import React, { Component } from 'react';
import store from './store';

import {getInitList,getInputChangeAction,getAddItemAction,getDeleteItemAction,initListAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';

import HookDemo from "./hookDemo"
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
            <div>
             <TodoListUI
            inputValue = {this.state.inputValue}
            handleInputChange = {this.handleInputChange}
            handleBtnClick = {this.handleBtnClick}
            handleItemDelete = {this.handleItemDelete}
            list = {this.state.list}
            />
            <HookDemo/>
            </div>
      

        )
    }
    componentDidMount(){
  
        const action = getInitList();
        store.dispatch(action)
        console.log('action----',action)
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