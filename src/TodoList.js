import React ,{Component} from 'react';  
import {connect} from 'react-redux';

const TodoList = (props)=>{
    const {inputValue ,handleInputChange,handleClick,list,handleDelete}=props
    return(
        <div>
             <div>
                 <input type="text" value={inputValue}
                 onChange={handleInputChange}
                 />
                 <button onClick={handleClick}>提交</button>
             </div>
             <ul>
                 {
                     list.map((item,index)=>{
                         return <li key={index} onClick={handleDelete.bind(this,index)}>{item}</li>
                     })
                 }
             </ul>
        </div>
    )
}



const mapDispatchToprops = (dispatch)=>{
    return {
        handleInputChange(e){
            const action = {
                type:'change_input_value',
                value:e.target.value
            }
            console.log(e.target.value);
            dispatch(action);  
        },
        handleClick(){
            const action = {
                type:'add_item'
            }
            dispatch(action)
        },
        handleDelete(val){
            const action = {
                type:'add_delete',
                value:val
            }
            dispatch(action)
            console.log('handleDelete',val)
        }
    }
}

const mapStateToprops = (state)=>{
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}
export default connect(mapStateToprops,mapDispatchToprops)(TodoList) ;