import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div className="flex">
      <button onClick={() => {
        setCount(count - 1)
      }}>-</button>
      <h2>{count}</h2>
      <button onClick={() => {
        setCount(count + 1)
      }}>+</button>
    </div>
  )
}

export default Counter