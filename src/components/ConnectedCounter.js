import React from 'react'
import { connect } from "react-redux";
import { incrementCount, decrementCount } from '../redux/actions'

const Counter = ({
  incrementCount,
  decrementCount,
  count
}) => {

  return (
    <div className="flex">
      <button onClick={decrementCount}>-</button>
      <h2>{count}</h2>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
  incrementCount:() => dispatch(incrementCount()),
  decrementCount: () => dispatch(decrementCount())
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)