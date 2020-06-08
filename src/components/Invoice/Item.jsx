import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../modules/action'

// This component is individual added item
const Item = (props) => {
  const { item, editItem } = props

  const onClick = (e) => {
    e.preventDefault()
    props.deleteItem(item.id)
  }
  
  const onChangeQty = (e) => {
    editItem(item.id, {
      ...item,
      quantity: e.target.value
    })
  }

  const onChangePrice= (e) => {
    editItem(item.id, {
      ...item,
      price: e.target.value
    })
  }

  return (
    <tr>
      <td>{item.name}</td>
      <td><input type='text' value={item.quantity} onChange={onChangeQty}/></td>
      <td><input type='text' value={item.price} onChange={onChangePrice}/></td>
      <td>{item.total}</td>
      <td><button className='btn' onClick={onClick}>X</button></td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: id => dispatch(actionCreators.deleteItem(id)),
    editItem: (id, item) => dispatch(actionCreators.editItem(id, item))
  }
}

export default connect(null, mapDispatchToProps)(Item)