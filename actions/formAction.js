import * as type from './actionType'

export const addItemAction = (item) => ({
    type: type.ADD_ITEM,
    item
});

export const removeItemAction = (index) => ({
    type: type.REMOVE_ITEM,
    index
});
