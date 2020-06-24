import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators'
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
            <Fragment>
                <div>
                    <Input  
                    value={this.state.inputValue } 
                    placeholder="todo info" 
                    style={{ width: "300px", marginRight: "10px" }}
                    onChange={this.handleInputChange}
                    />
                    <Button onClick={this.handleBtnClick} type="primary">提交</Button>
                </div>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={this.handleItemDelete.bind(this,index)}>
                            {item}
                        </List.Item>
                    )}
                    style={{ marginTop: "10px", width: "300px" }}
                />
            </Fragment>


        )
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        console.log(e.target.value);
        store.dispatch(action)
    }
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