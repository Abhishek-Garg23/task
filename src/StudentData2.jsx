import React, {useState} from "react"
import Student from './Student';

const StudentData = (props) => {
    const address= props.addressLine1 + " " + props.addressLine2 + " " + props.city + " " + props.postalCode + " " + props.country;
    const [student, setStudent] = useState([
        {
            id: props.id, studName: props.name, age: props.age, email: props.email, phone: props.phone, course: props.course, address: address
        }
        // {
        //     id: 2, studName: "Novesh Garg", age: 24, email:"novesh@gmail.com", phone:"9806944875", course:"MSC", address: {addressLine1: "RZ/H-48", addressLine2: "West Sagar Pur", city: "New Delhi", pin: 110046, country: "India"}
        // },
        // {
        //     id: 3, studName: "Parth Sharma", age: 23, email:"parth@gmail.com", phone:"9206978595", course:"B.Tech", address: {addressLine1: "W-78", addressLine2: "Shalimar Bagh", city: "New Delhi", pin: 121006, country: "India"}
        // },
        // {
        //     id: 4, studName: "Meena Chauhan", age: 28, email:"meena@gmail.com", phone:"9213739828", course:"M.Tech", address: {addressLine1: "A-21", addressLine2: "Paschim Vihar", city: "New Delhi", pin: 220046, country: "India"}
        // },
        // {
        //     id: 5, studName: "Sachin Shah", age: 42, email:"sachin@gmail.com", phone:"7508966935", course:"MBA", address: {addressLine1: "WZ/566", addressLine2: "World Trade Centre", city: "Kochi", pin: 131046, country: "India"}
        // },
    ]);
 
    
    return(
        <div>
            {student.map((data) => 
                <ul style={{ listStyleType: "none" }}>
                    <li key={data.id}>
                        <Student
                            id={data.id}
                            studName={data.name}
                            age= {data.age}
                            email={data.email}
                            phone={data.phone}
                            course={data.course}
                            address= {address}
                        />
                    </li>
                </ul>
            )}
        </div>
    );
}

export default StudentData;