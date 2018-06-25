import store from '../store'
import {addItemAction,removeItemAction} from "../actions/formAction";

export const addItem = (item)=>{
    store.dispatch(addItemAction(item))
};

export const removeItem = (index)=>{
    store.dispatch(removeItemAction(index))

};