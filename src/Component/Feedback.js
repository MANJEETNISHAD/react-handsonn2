// import React, { useState } from "react";
import "./Feedback.css";

const Feedback = (props) => {
  // const[text,setText]=useState(null)
  // const handleOnchange=(event)=>{
  //   const name=event.target.value;
  //   setText({name:name})
  // }
//   const [personDetails, setPersonDetails] = useState({
//     Name:"",
//     Department:"",
//     Rating:0
//   });

//   const handlechange = (event) => {
// setPersonDetails({Name:event.target.value})
//   };
//   const handlechange1 = (event) => {
// setPersonDetails({Department:event.target.value})
//   };
//   const handlechange2 = (event) => {
// setPersonDetails({Rating:event.target.value})
//   };
//   const handleSubmitBtn=()=>{
//     console.log(personDetails);
//   }
  return (
    <div>
      <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
      <div className="container">
        <h2 className="lable">Name:</h2>
        <input
          type="text"
          name="name"
          placeholder="name"
          // value={}

        />
        <br />
        <h2 className="lable">Department:</h2>
        <input type="text" placeholder="Department"/>
        <br />
        <h2 className="lable">Rating:</h2>
        <input type="number" placeholder="Rating" />
        <br />
        <br />
        <button type="submit">
          submit
        </button>
      </div>
    </div>
  );
};

export default Feedback;
