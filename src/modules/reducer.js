import { ADD, EDIT, DELETE } from './constant'

const reducer = (state = [], action) => {
  const { id, item } = action
  switch (action.type) {
    case ADD:
      return [ ...state, {
        id: id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total: item.quantity * item.price
      }]
    case EDIT:
      return state.map(obj => {
        if (id === obj.id) {
          item.id = id
          item.total = item.quantity * item.price
          return item
        }
        return obj
      })
    case DELETE:
      return state.filter(item => item.id !== id)
    default:
      return state
  }
}

export default reducer