import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../modules/action'

const ItemInput = ({addItem}) => {
  const [itemName, setItemName] = useState('')
  const [itemQty, setItemQty] = useState('')
  const [itemPrice, setItemPrice] = useState('')

  const onChangeName = (e) => {
    setItemName(e.target.value)
  }

  const onChangeQty = (e) => {
    setItemQty(e.target.value)
  }

  const onChangePrice= (e) => {
    setItemPrice(e.target.value)
  }

  const onClick = (e) => {
    e.preventDefault()
    if (!itemName || !itemQty || !itemPrice) {
      return
    }
    addItem({
      name: itemName,
      quantity: itemQty,
      price: itemPrice,
    })
  }

  return (
    <tr>
      <th><input type='text' value={itemName} onChange={onChangeName}></input></th>
      <th><input type='text' value={itemQty} onChange={onChangeQty}></input></th>
      <th><input type='text' value={itemPrice} onChange={onChangePrice}></input></th>
      <th><button onClick={onClick}>Add a item</button></th>
    </tr>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onEdit: () => dispatch(actionCreators.deleteItem(ownProps.id)),
    addItem: item => dispatch(actionCreators.addItem(item))
  }
}

export default connect(null, mapDispatchToProps)(ItemInput)