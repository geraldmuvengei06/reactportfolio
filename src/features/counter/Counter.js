import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increament } from "./counterSlice";

export default function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button onClick={() => dispatch(decrement())}> - </button>
                <span>{count}</span>
                <button onClick={() => dispatch(increament())}> + </button>
            </div>
        </div>
    )
}