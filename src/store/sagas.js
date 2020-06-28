import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {GET_INIT_LIST} from "./actionTypes"
import axios from 'axios';
import {initListAction} from './actionCreators'
function* fetchUser(){
    try{
        const res = yield axios.get('/api/todolist.json');
        const action =  initListAction(res.data)
        yield put(action);
    }catch(e){
        alert(e)
    }
  
      
}
 
function* mySaga(){
    yield takeEvery(GET_INIT_LIST,fetchUser);
}
  
  export default mySaga;