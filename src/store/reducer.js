import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'
const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;

        return newState 
    }
    if(action.type===INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        console.log('----------------action.data',action.data,'newState.list',newState.list,newState,typeof(action.data))
        return newState 
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        //newState.list.push(action.value);
        newState.inputValue=''
        console.log('reducer',action,newState)
        return newState
    }
    if(action.type === DELETE_TODO_ITEM){
        console.log('handleItemDelete---',action.index)
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState
    }
    return state
}