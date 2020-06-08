import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../modules/action'

const Item = (props) => {
  const { item } = props
  console.log('1', item)
  const onClick = (e) => {
    e.preventDefault()
    props.deleteItem(item.id)
  }
  return (
    <tr>
      <th>{item.name}</th>
      <th>{item.quantity}</th>
      <th>{item.price}</th>
      <th>{item.total}</th>
      <th><button onClick={onClick}>X</button></th>
    </tr>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteItem: id => dispatch(actionCreators.deleteItem(id))
  }
}

export default connect(null, mapDispatchToProps)(Item)