const defaultState = {
    inputValue: 'test',
    list: ['12','123']
}

export default (state = defaultState, action) => {
    if(action.type==='change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;

        return newState 
    }else if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        //newState.list.push(action.value);
        newState.inputValue=''
        console.log('reducer',action,newState)
    }
    return state
}