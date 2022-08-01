import React from "react";
//import { useLocation } from "react-router-dom";

const userCard = (props) => {
    const uppercase = word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return(
        <div className="row justify-content-center">
            {props.studentData.map(data => (
                <div>
                    <strong>Basic Details</strong>
                    <p>Name: {data.firstName + data.lastName}</p>
                    <p>Age: {data.age}</p>
                    <p>Sex: {data.gender}</p>
                    <p>Interest: {data.interest.map((data) => {
                      return  data.value + ", "
                    })}</p>
                    <p>Preferred Languages: {data.language.map((data) => {
                      return  data.value + ", "
                    })}</p>
                    <p>Email: {data.email}</p>
                    <p>Mobile Number: {data.phone}</p>
                    <p>Address: {data.addressLine1 + " " + data.addressLine2 + " " + data.city + ", " + data.state + ", " + data.country}</p>
                    <strong>Education Details</strong>
                    <p>10th Standard Details: {"School Name:" + " " + data.tenthSchoolName + ",  Affiliated Boards: " + data.tenthBoardName + ", Marks:" + data.tenthPercentage}</p>
                    <p>12th Standard Details: {"School Name:" + " " + data.twelvthSchoolName + ",  Affiliated Boards: " + data.twelvthBoardName + ", Marks:" + data.twelvthPercentage}</p>
                    <p>Graduation Details: {"College Name:" + " " + data.college + ",  Affiliated University: " + data.univerity + ", Marks:" + data.universityPercentage}</p>
                    <strong>Work Experience</strong>
                    <p>{"Occupation / Profession:" + " " + data.occupation + ", Total Experience:" + " " + data.experience + ", CTC Per Annum:" + " " + "₹" + data.income}</p>
                </div>
            ))}
        </div>
    );
}

export default userCard;