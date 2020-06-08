import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../modules/action'

// This component handles user input when adding item
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
    setItemName('')
    setItemQty('')
    setItemPrice('')
  }

  return (
    <tr>
      <td><input type='text' value={itemName} onChange={onChangeName}/></td>
      <td><input type='text' value={itemQty} onChange={onChangeQty}/></td>
      <td><input type='text' value={itemPrice} onChange={onChangePrice}/></td>
      <td>
        <button className='btn' onClick={onClick}>+</button>
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: item => dispatch(actionCreators.addItem(item))
  }
}

export default connect(null, mapDispatchToProps)(ItemInput)