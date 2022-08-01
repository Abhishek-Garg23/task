import React from "react"

const StudentData = (props) => {
    const tableRows = props.studentData.map((data, index) => {
        return (
          <tr>
            <td>{index}</td>
            <td>{data.firstName + data.lastame}</td>
            <td>{data.age}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.course}</td>
            <td>{data.addressLine1}</td>
            <td>{data.addressLine2}</td>
            <td>{data.city}</td>
            <td>{data.postalCode}</td>
            <td>{data.country}</td>
          </tr>
        );
      });
      
      return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Sr.NO</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Course</th>
                <th>Address Line 1</th>
                <th>Address Line 2</th>
                <th>City</th>
                <th>Postal Code</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      );
}

export default StudentData;