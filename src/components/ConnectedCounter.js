import React from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount } from '../redux/actions'
import { getObfuscatedPropNames, passProps } from '../utils/obfuscate-props'
import CounterDisplay from './CounterDisplay'
import Title from './Title'

const { count_, incrementCount_, decrementCount_ } = getObfuscatedPropNames([
  'count',
  'incrementCount',
  'decrementCount',
])

const Counter = (props) => {
  return (
    <div className="flex">
      <Title {...passProps({ title: 'This is a title' })} />
      <button onClick={props[decrementCount_]}>-</button>
      <CounterDisplay
        {...passProps({
          count: props[count_],
        })}
      />
      <button onClick={props[incrementCount_]}>+</button>
      <Title
        {...passProps({
          title: 'This is another title',
          date: new Date().toUTCString(),
        })}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  [count_]: state.count,
})
const mapDispatchToProps = (dispatch) => ({
  [incrementCount_]: () => dispatch(incrementCount()),
  [decrementCount_]: () => dispatch(decrementCount()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
