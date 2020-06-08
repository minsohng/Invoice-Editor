import { ADD, EDIT, DELETE } from './constant'

const addItem = (item) => {
  console.log('item', item)
  return {
    type: ADD,
    id: Date.now(),
    item,
  }
}

const deleteItem = (id) => {
  return {
    type: DELETE,
    id,
  }
}

const editItem = (id, item) => {
  return {
    type: EDIT,
    id,
    item,
  }
}

export const actionCreators = {
  addItem,
  deleteItem,
  editItem,
}