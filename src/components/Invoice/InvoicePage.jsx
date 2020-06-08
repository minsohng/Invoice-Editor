import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import ItemInput from './ItemInput'
import { actionCreators } from '../../modules/action'

const InvoicePage = ({state, addItem}) => {

  const itemList = state && state.map((item, i) => {
    return <Item key={i} item={item}/>
  })

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {itemList}
          <ItemInput props={addItem}/>
        </tbody>
      </table>
    </>
  )
}

const mapStateToProps = (state) => {
  return { state } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: item => dispatch(actionCreators.addItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicePage)