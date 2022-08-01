import React, {useState} from "react";
import StudentData from "./StudentData";
// import {v4 as uuidv4} from 'uuid'

// const unique_id = uuidv4();
// const small_id = unique_id.slice(0,8)

const StudentForm = () => {
    const [name, setName]= useState('')
    const [age, setAge]= useState('')
    const [email, setEmail]= useState('')
    const [phone, setPhone]= useState('')
    const [course, setCourse]= useState('');
    const [addressLine1, setAddressLine1]= useState('')
    const [addressLine2, setAddressLine2]= useState('')
    const [city, setCity]= useState('')
    const [postalCode, setPostalCode]= useState('')
    const [country, setCountry]= useState('')
    const [updateValue, setUpdateValue] = useState(false)
    const [studentDetails, setStudentDetails] = useState([])
    const [errors, setErrors] = useState({})

    const handleValidation = () => {
        let errors= {}
        let formIsValid= true

        //name
        if(!name){
            formIsValid= false
            errors["name"]= "cannot be empty"
        }

        if(typeof name !== "undefined"){
            if(!name.match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
            }      	
          }

        //Email
        if (!email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }
  
        if (typeof(email) !== "undefined") {
            let lastAtPos = email.lastIndexOf("@");
            let lastDotPos = email.lastIndexOf(".");
    
            if (
            !(
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                email.indexOf("@@") == -1 &&
                lastDotPos > 2 &&
                email.length - lastDotPos > 2
            )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        setErrors(errors);
        return formIsValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(handleValidation()){
            const student= {
                name: name,
                age: age,
                email: email,
                phone: phone,
                course: course,
                addressLine1: addressLine1,
                addressLine2: addressLine2,
                city: city,
                postalCode: postalCode,
                country: country
            }
    
            setStudentDetails(prev => ([
                ...prev,
                student
            ]))
            setUpdateValue(true)
            clearState()
        }
    }

    const clearState = () => {
        setName('');
        setAge('');
        setEmail('');
        setPhone('');
        setCourse('');
        setAddressLine1('');
        setAddressLine2('');
        setCity('');
        setPostalCode('');
        setCountry('');
    }

    const addDataRows = (data) => {
        const totalStudents = studentDetails.length;
        data.id = totalStudents + 1;
        const updatedStudentData = [...studentDetails];
        updatedStudentData.push(data);
        return(updatedStudentData);
      };
    
    return(
        <div>
            <form className="row g-3">
                <div className="col-md-4">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
                    <span style={{ color: "red" }}>{errors["name"]}</span>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Age</label>
                    <input className="form-control" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your Age" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email"/>
                    <span style={{ color: "red" }}>{errors["email"]}</span>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Phone</label>
                    <input className="form-control" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your Mobile Number"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Course</label>
                    <input className="form-control" type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Enter your Course Name"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Address Line 1</label>
                    <input className="form-control" type="text" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} placeholder="Enter your Address Line 1"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Address Line 2</label>
                    <input className="form-control" type="text" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} placeholder="Enter your Address Line 2"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">City</label>
                    <input className="form-control" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City Name"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Postal Code</label>
                    <input className="form-control" type="number" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Enter your Postal Code"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Country</label>
                    <input className="form-control" type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter Country Name"/>
                </div>
                <div className="col-12 mt-2">
                    <button className="btn btn-secondary" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            {
                updateValue && <StudentData studentData={studentDetails} />
            }
        </div>
    )
}

export default StudentForm;