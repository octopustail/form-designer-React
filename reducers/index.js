import * as types from '../actions/actionType'
import {combineReducers} from 'redux'
import _ from 'lodash'

const initialFormState = {
    status: 'edit'
};

const initialItemState = {
    items: []
};

// const itemReducers = (state = initialItemState, action) => {
//     let newItems;
//     switch (action.type) {
//         case types.ADD_ITEM:
//             newItems = _.concat(state.items, action.item);
//             return _.assign({}, state, {items: newItems});
//         case types.REMOVE_ITEM:
//             newItems = _.filter(state.items, (value, index) => (action.index !== index));
//             return _.assign({}, state, {items: newItems});
//         default:
//             return state
//     }
// };

//TODO: action里的item undifined
function itemReducers(state = initialItemState, action) {
    var type = action.type;
    if (type == types.ADD_ITEM) {
        console.log('state.i',state.items,'action.i',action.item);
        let newItems = _.concat(state.items, action.item);


        return _.assign({}, state, {items: newItems});
    }

    if (type == types.REMOVE_ITEM) {
        let newItems = _.filter(state.items, (x, index) => index != action.index);
        return _.assign({}, state, {items: newItems});
    }
    return state;
}
const formReducers = (state = initialFormState, action) => {
    switch (action.type) {
        case types.SHOW_EDIT:
            return _.assign({}, state, {status: 'edit'});
        case types.SHOW_PREVIEW:
            return _.assign({}, state, {status: 'preview'});
        default:
            return state
    }
};

let reducers = combineReducers({
    itemState: itemReducers,
    formState: formReducers

});

export default reducers