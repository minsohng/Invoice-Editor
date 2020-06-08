import React from 'react'
import { connect } from 'react-redux'
import { TAX_PERCENT } from '../../modules/constant'

const TotalPage = ({ state }) => {

  const subTotal = getSubTotal(state)
  const taxAmount = getTaxAmount(subTotal)
  const Total = subTotal + taxAmount

  return (
    <>
      <tr>
        <td colSpan='2'></td>
        <td className='text-right' colSpan='2'>Subtotal</td>
        <td className='text-left'>${subTotal}</td>
      </tr>
      <tr>
        <td colSpan='2'></td>
        <td className='text-right' colSpan='2'>Tax (5%)</td>
        <td className='text-left'>${taxAmount}</td>
      </tr>
      <tr>
        <td colSpan='2'></td>
        <td className='text-right' colSpan='2'>Total</td>
        <td className='text-left'>${Total}</td>
      </tr> 
    </>
  )
}

const getSubTotal = (itemList) => {
  return itemList.reduce((a,b) => a + b.total, 0)
}

const getTaxAmount = (subTotal) => {
  return Math.round(subTotal * TAX_PERCENT * 100) / 100
}

const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps, null)(TotalPage)