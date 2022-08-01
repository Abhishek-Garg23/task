import React from "react"
import Counter from './Counter';

const Counters = (props) => {
    return(
        <div>
            <button onClick= {props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {props.counters.map((data) => 
                <ul style={{ listStyleType: "none" }}>
                    <li key={data.id}>
                        <Counter key={data.id} onIncrement={props.onIncrement} onDecrement={props.onDecrement} onDelete={props.onDelete} onReset={props.onReset} counter={data}/>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Counters;