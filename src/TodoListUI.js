import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
const TodoListUI= (props)=>{
    return (
        <div>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder="todo info"
                    style={{ width: "300px", marginRight: "10px" }}
                    onChange={props.handleInputChange}
                />
                <Button onClick={props.handleBtnClick} type="primary">提交</Button>
            </div>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={(index) => {
                        props.handleItemDelete(index)
                    }}>
                        {item}
                    </List.Item>
                )}
                style={{ marginTop: "10px", width: "300px" }}
            />
        </div>
    )
   
}

export default TodoListUI;