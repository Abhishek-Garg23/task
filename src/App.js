import React, {useState} from "react";
import Counters from "./components/Counter/Counters";
import Navbar from "./components/Counter/Navbar";
import StudentData from './StudentData';
import StudentForm from "./StudentForm";

const App = () => {
    // const [counter, setCounter] = useState([
    //     { id: 1, value: 4 },
    //     { id: 2, value: 0 },
    //     { id: 3, value: 0 },
    //     { id: 4, value: 0 }
    // ]);

    // const handleIncrement = (counters) => {
    //     const newCounter = [...counter];
    //     const index = newCounter.indexOf(counters);
    //     newCounter[index] = {...counters};
    //     newCounter[index].value++;
    //     setCounter(newCounter)
    // }

    // const handleDecrement = (counters) => {
    //     const newCounter = [...counter];
    //     const index = newCounter.indexOf(counters);
    //     newCounter[index] = {...counters};
    //     newCounter[index].value === 0 ? 0 : newCounter[index].value--;
    //     setCounter(newCounter)
    // }

    // const handleDelete = (counterID) => {
    //     const newCounter = counter.filter(c => c.id !== counterID);
    //     setCounter(newCounter);
    // }

    // const handleReset = () => {
    //     const newCounter = counter.map(c => {
    //         c.value= 0;
    //         return c;
    //     });
    //     setCounter(newCounter);
    // }

    return(
        <StudentForm />
        // <>
        //     <Navbar totalCounter={counter.filter(c => c.value > 0).length}/>
        //     <main className="container">
        //         <Counters counters={counter} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} onReset={handleReset}/>
        //     </main>
        // </>
    );
}

export default App;