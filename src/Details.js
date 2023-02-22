import React from 'react'
import './App.css'

const Details = (props) => {
  return (
    <>
     {/* className="center" */}
      <span className="center">Name {props.Name} Department {props.Deprtment}{props.Rating}</span>
    </>
    
  )
}

export default Details
