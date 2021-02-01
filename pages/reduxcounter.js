import React from 'react'
import { center } from '../styles/reduxcounter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementCounter,
  incrementCounter,
} from '../redux/actions/counterActions'

const reduxcounter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={`container ${center}`}>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
      <h1>{count}</h1>
    </div>
  )
}

export default reduxcounter
