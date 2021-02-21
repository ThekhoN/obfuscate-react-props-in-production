import React from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount } from '../redux/actions'
import { getDisplayPropName } from '../utils/strings'
import { getProps } from '../utils/props'
import CounterDisplay from './CounterDisplay'

// display prop names
export const p_ = {
  incrementCount: getDisplayPropName('incrementCount'),
  decrementCount: getDisplayPropName('decrementCount'),
  count: getDisplayPropName('count'),
}

const Counter = (props) => {
  return (
    <div className="flex">
      <button onClick={props[p_['decrementCount']]}>-</button>
      <CounterDisplay {...getProps(props, [p_['count']])} />
      {/* <CounterDisplay {...getProps(props)} /> */}
      {/* <CounterDisplay {...props} /> */}
      <button onClick={props[p_['incrementCount']]}>+</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  [p_['count']]: state.count,
})
const mapDispatchToProps = (dispatch) => ({
  [p_['incrementCount']]: () => dispatch(incrementCount()),
  [p_['decrementCount']]: () => dispatch(decrementCount()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
