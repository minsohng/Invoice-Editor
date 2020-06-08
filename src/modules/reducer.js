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
        total: getTotal(item.quantity, item.price)
      }]
    case EDIT:
      return state.map(state => {
        if (id === state.id) {
          item.total = getTotal(item.quantity, item.price)
          return item
        }
        return state
      })
    case DELETE:
      return state.filter(item => item.id !== id)
    default:
      return state
  }
}

const getTotal = (qty, price) => {
  return qty * price
}

export default reducer