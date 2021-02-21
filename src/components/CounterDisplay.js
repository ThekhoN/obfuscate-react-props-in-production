import React from 'react'
import { p_ } from './ConnectedCounter'

const CounterDisplay = (props) => {
  return <h2>{props[p_['count']]}</h2>
}

export default CounterDisplay
