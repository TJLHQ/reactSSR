import axios from 'axios';
import {CHANGE_LIST} from './contants';
const changeList=list=>({
    type:CHANGE_LIST,
        list
})
const getHomeList=()=>{
    return (dispatch)=>{
     return   axios.get('http://aa.mmys.fun/api/').then(res=>{
         dispatch(changeList(res.data.data))
     })
    }
}
export {getHomeList}