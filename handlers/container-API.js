import store from '../store'
import {showEditAction,showPreviewAction} from "../actions/containerAction";

export const showEdit = ()=>{
    store.dispatch(showEditAction())
};

export const showPreview = ()=>{
    store.dispatch(showPreviewAction())

};