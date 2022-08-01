import React from "react";

const Student = (props) => {
    return(
        <div>
            <p>id: {props.id}</p>
            <p>Name: {props.studName}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <p>Mobile Number: {props.phone}</p>
            <p>Course: {props.course}</p>
            <p>Address: {props.address.addressLine1 + " " + props.address.addressLine2 + " " + props.address.city + " " + props.address.pin + " " + props.address.country}</p>
        </div>
    );
}

export default Student;