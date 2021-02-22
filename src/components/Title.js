import React from 'react'
import { get_p_ } from '../utils/obfuscate-props'

const Title = (props) => {
  const date = props[get_p_('date')]
  return (
    <>
      <h2>{props[get_p_('title')]}</h2>
      {date && <div className="date-container">{date}</div>}
    </>
  )
}

export default Title
