import React, {useState} from "react"
import Select from 'react-select'
import PhoneInput from 'react-phone-number-input'
//import { useNavigate  } from "react-router-dom";
import 'react-phone-number-input/style.css'
import "./style.css"
import UserCard from './userCard'

const StudentForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [interest, setInterest] = useState([])
    const [country, setCountry] = useState('')
    const [city, setCity]= useState('')
    const [state, setState]= useState('')
    const [addressLine1, setAddressLine1]= useState('')
    const [addressLine2, setAddressLine2]= useState('')
    const [phone, setPhone]= useState('')
    const [email, setEmail]= useState('')
    const [occupation, setOccupation] = useState('')
    const [income, setIncome] = useState('')
    const [language, setLanguage] = useState([])
    const [experience, setExperience] = useState('')
    const [tenthSchoolName, setTenthSchoolName] = useState('')
    const [tenthBoardName, setTenthBoardName] = useState('')
    const [tenthPercentage, setTenthPercentage] = useState('')
    const [twelvthSchoolName, setTwelvthSchoolName] = useState('')
    const [twelvthBoardName, setTwelvthBoardName] = useState('')
    const [twelvthPercentage, setTwelvthPercentage] = useState('')
    const [college, setCollege] = useState('')
    const [university, setUniversity] = useState('')
    const [universityPercentage, setUniversityPercentage] = useState('')
    const [updateValue, setUpdateValue] = useState(false)
    const [studentDetails, setStudentDetails] = useState([])
    const [errors, setErrors] = useState({})

    //const navigate = useNavigate();

    const interests = [
        { value: 'singing', label: 'Singing' },
        { value: 'dancing', label: 'Dancing' },
        { value: 'playing outdoor games', label: 'Playing Outdoor Games' },
        { value: 'playing indoor games', label: 'Playing indoor Games' },
        { value: 'swimming', label: 'Swimming' },
        { value: 'gyming', label: 'Gyming' },
        { value: 'gardening', label: 'Gardening' },
        { value: 'cooking', label: 'Cooking' },
        { value: 'painting', label: 'Painting' }
    ]

    const languages = [
        { value: 'hindi', label: 'Hindi' },
        { value: 'english', label: 'English' },
        { value: 'telugu', label: 'Telugu' },
        { value: 'Malayalam', label: 'Malayalam' },
        { value: 'french', label: 'French' },
        { value: 'chinese', label: 'Chinese' },
        { value: 'japanese', label: 'Japanese' },
        { value: 'korean', label: 'Korean' },
    ]

    const handleInterests = (selected) => {
        setInterest(selected);
    };

    const handleLanguages = (selected) => {
        setLanguage(selected);
    };

    const handleValidation = () => {
        let errors= {}
        let formIsValid= true

        //firstName
        if(typeof(firstName) !== "undefined"){
            if(!firstName.match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters are accepted";
            }      	
        }

        //lasName
        if(typeof(lastName) !== "undefined"){
            if(!lastName.match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters are accepted";
            }      	
        }

        //occupation
        if(typeof(occupation) !== "undefined"){
            if(!occupation.match(/^[a-zA-Z0-9_ ]+$/)){
                formIsValid = false;
                errors["occupation"] = "Only Numbers and letters are accepted."
            }
        }

        //Email
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
        e.preventDefault();
        if(handleValidation()){
            const student= {
                firstName: firstName,
                lastName: lastName,
                age: age,
                gender: gender,
                interest: interest,
                country: country,
                city: city,
                state: state,
                addressLine1: addressLine1,
                addressLine2: addressLine2,
                phone: phone,
                email: email,
                occupation: occupation,
                income: income,
                language: language,
                experience: experience,
                tenthSchoolName: tenthSchoolName,
                tenthBoardName: tenthBoardName,
                tenthPercentage: tenthPercentage,
                twelvthSchoolName: twelvthSchoolName,
                twelvthBoardName: twelvthBoardName,
                twelvthPercentage: twelvthPercentage,
                college: college,
                university: university,
                universityPercentage: universityPercentage
            }
    
            setStudentDetails(prev => ([
                ...prev,
                student
            ]))
            setUpdateValue(true)
            clearState()

            //navigate('/userCard');
        }
    };

    console.log("data: ", studentDetails);

    const clearState = () => {
        setFirstName('')
        setLastName('')
        setAge('')
        setGender('')
        setInterest('')
        setCountry('')
        setCity('')
        setState('')
        setAddressLine1('')
        setAddressLine2('')
        setPhone('')
        setEmail('')
        setOccupation('')
        setIncome('')
        setLanguage('')
        setExperience('')
        setTenthSchoolName('')
        setTenthBoardName('')
        setTenthPercentage('')
        setTwelvthSchoolName('')
        setTwelvthBoardName('')
        setTwelvthPercentage('')
        setCollege('')
        setUniversity('')
        setUniversityPercentage('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" value={firstName} placeholder="Enter your First Name" onChange={(e) => setFirstName(e.target.value)} required={true}/>
                    <span style={{ color: "red" }}>{errors["firstName"]}</span>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={lastName} placeholder="Enter your Last Name" onChange={(e) => setLastName(e.target.value)} required={true}/>
                    <span style={{ color: "red" }}>{errors["lastName"]}</span>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" value={age} placeholder="Enter your Age" min="18" onChange={(e) => setAge(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Gender</label>
                    <input type="radio" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)}/>Male
                    <input type="radio" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)}/>Female
                    <input type="radio" value="Others" checked={gender === 'Others'} onChange={(e) => setGender(e.target.value)}/>Others
                </div>
                <div>
                    <label>Interest</label>
                    <Select options={interests} onChange={handleInterests} loseMenuOnSelect={false} allowSelectAll={true} value={interest} isMulti/>
                </div>
                <div>
                    <label>Select a Country</label>
                    <select value={country} onChange={(e) => setCountry(e.target.value)} required={true}>
                        <option value="">Select a Country</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="America">America</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </div>
                <div>
                    <label>Select a City</label>
                    <select value={city} onChange={(e) => setCity(e.target.value)} required={true}>
                    <option value="">Select a City</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Kochi">Kochi</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="New York">New York</option>
                        <option value="Chicago">Chicago</option>
                    </select>
                </div>
                <div>
                    <label>Select a State</label>
                    <select value={state} onChange={(e) => setState(e.target.value)} required={true}>
                        <option value="">Select a State</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Punjab Province">Punjab Province</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="NorthEastern U.S">NorthEastern U.S</option>
                        <option value="Illinois">Illinois</option>
                    </select>
                </div>
                <div>
                        <label>Address Line 1</label>
                        <input type="text" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} placeholder="Enter your Address Line 1" required={true}/>
                    </div>
                    <div>
                        <label>Address Line 2</label>
                        <input type="text" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} placeholder="Enter your Address Line 2" required={true}/>
                    </div>
                <div>
                    <label>Mobile Number</label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setPhone}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required={true}/>
                    <span style={{ color: "red" }}>{errors["email"]}</span>
                </div>
                <div>
                    <label>Occupation / Profession</label>
                    <input type="text" value={occupation} placeholder="Enter your Occupation / Profession" onChange={(e) => setOccupation(e.target.value)} required={true}/>
                    <span style={{ color: "red" }}>{errors["occupation"]}</span>
                </div>
                <div>
                    <label>Income Per Annum (INR)</label>
                    <input type="number" value={income} placeholder="Enter your Income per Annum (INR)" onChange={(e) => setIncome(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Preferred Language</label>
                    <Select options={languages} onChange={handleLanguages} loseMenuOnSelect={false} allowSelectAll={true} value={language} isMulti/>
                </div>
                <div>
                    <label>Select a Work Experience (in Years)</label>
                    <select value={experience} onChange={(e) => setExperience(e.target.value)} required={true}>
                    <option value="">Select a Work Experience (in Years)</option>
                        <option value="+1 years of experience">+1</option>
                        <option value="+2 years of experience">+2</option>
                        <option value="+5 years of experience">+5</option>
                        <option value="+10 years of experience and more">+10 and more</option>
                    </select>
                </div>
                <div>
                    <label>Education Details</label>
                </div>
                <div>
                    <label>10th Standard Details</label>
                </div>
                <div>
                    <label>School Name</label>
                    <input type="text" value={tenthSchoolName} placeholder="Enter your School Name" onChange={(e) => setTenthSchoolName(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Affiliated Board</label>
                    <input type="text" value={tenthBoardName} placeholder="Enter your 10th Recognize Board" onChange={(e) => setTenthBoardName(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Percentage</label>
                    <input type="number" value={tenthPercentage} placeholder="Enter your 10th Percentage" onChange={(e) => setTenthPercentage(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>12th Standard Details</label>
                </div>
                <div>
                    <label>School Name</label>
                    <input type="text" value={twelvthSchoolName} placeholder="Enter your School Name" onChange={(e) => setTwelvthSchoolName(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Affiliated Board</label>
                    <input type="text" value={twelvthBoardName} placeholder="Enter your 12th Recognize Board" onChange={(e) => setTwelvthBoardName(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Percentage</label>
                    <input type="number" value={twelvthPercentage} placeholder="Enter your 12th Percentage" onChange={(e) => setTwelvthPercentage(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Graduation Details</label>
                </div>
                <div>
                    <label>College Name</label>
                    <input type="text" value={college} placeholder="Enter your College Name" onChange={(e) => setCollege(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Affiliated University</label>
                    <input type="text" value={university} placeholder="Enter your Affiliated University" onChange={(e) => setUniversity(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Percentage</label>
                    <input type="number" value={universityPercentage} placeholder="Enter your University Percentage" onChange={(e) => setUniversityPercentage(e.target.value)} required={true}/>
                </div>
                <input type="submit" />
            </form>
            {
                updateValue && <UserCard studentData={studentDetails} />
            }
        </div>
    );
}

export default StudentForm;