import React, { Fragment, useState } from "react";
const Counter = (props) => {

    const formatCount = () => {
        const {value} = props.counter;
        return (value === 0 ? 0 : value)
    }

    const getBadgeClasses = () => {
        let classes = "badge m-2 badge-"
        classes += props.counter.value === 0 ? "warning" : "primary"
        return classes
    }

    return (
        <Fragment>
            <span style={{ fontSize: '10px', fontWeight: 'bold'}} className={getBadgeClasses()}>{formatCount()}</span>
            <button onClick={() => props.onIncrement(props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
            <button onClick={() => props.onDecrement(props.counter)} className="btn btn-secondary btn-sm m-2">Decrement</button>
            <button onClick={() => props.onDelete(props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </Fragment>
    );
};

export default Counter;
