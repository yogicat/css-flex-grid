import React from 'react'

const OrderBookList = ({item}) => (
  <div className="OrderBookList">
    price: <em>{item[1]}</em> quantity: <em>{item[2]}</em>
  </div>
)

export default OrderBookList
