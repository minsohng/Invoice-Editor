import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import ItemInput from './ItemInput'
import TotalPage from './TotalPage'
import { actionCreators } from '../../modules/action'

// This is top parent component of invoice page
const InvoicePage = ({ state }) => {
  const itemList = state && state.map((item, i) => {
    return <Item key={i} item={item}/>
  })

  return (
    <table className='table'>
      <tbody>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        {itemList}
        <ItemInput/>
        <TotalPage/>
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return { state } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (id, item) => dispatch(actionCreators.editItem(id, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicePage)