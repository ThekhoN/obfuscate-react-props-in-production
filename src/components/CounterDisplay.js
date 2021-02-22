import React from 'react'
import { get_p_ } from '../utils/obfuscate-props'

const CounterDisplay = (props) => {
  return <h2>{props[get_p_('count')]}</h2>
}

export default CounterDisplay
