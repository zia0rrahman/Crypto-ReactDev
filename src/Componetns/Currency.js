import React from 'react'

// functional component
const Currency = (props) => {

    const {
        id,
        name,
        symbol,
        price_usd,
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
        } = props.data

  return (
    <div>
        <li className= {'currency ' + id}>
            <p className="currency-name">
            {name} ({symbol})
            </p>
            <h1>${(+price_usd).toFixed(2)}</h1>
            <p>{percent_change_1h} % 1hr</p>
            <p>{percent_change_24h} % 24hrs</p>
            <p>{percent_change_7d} % 7days</p>
        </li>
    </div>
  )
}

export default Currency
