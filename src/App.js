import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state={
    name:"",
    department:"",
    rating:0,
    data:[]
  }
  clickChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }
  clickChange1=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }
  clickChange2=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }
  handleClick=(e)=>{
 e.preventDefault();
    const saveData={
      name:this.state.name,
      department:this.state.department,
      rating:this.state.rating,

    }
    const arr=this.state.data;
    arr.push(saveData);
    this.setState({date:arr});

  }
  render() {
    return (
      <>
      <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
      <form className='container'>
      <label className='lable' >Name:</label>
      <input placeholder='Enter Your Name' name='name'id='Name' type='text' onChange={this.clickChange}/><br/><br/>
      <label className='lable' >Department:</label>
      <input placeholder='Department' name='department' id='Department'type='text'onChange={this.clickChange1} /><br/><br/>
      <label className='lable' >Rating:</label>
      <input placeholder='Rating' name='rating' id='Rating' type='number'onChange={this.clickChange2} /><br/><br/>
      
      <button type='submit' onClick={this.handleClick}>submit</button>
      </form>
      <div className="manjeet">


      {this.state.data.map((item,index)=>{
        return(
          <div key={index} className="emp" >
         {/* <div className="emp"  > */}
          <span ><b>Name:</b>{item.name} <b>|Deprtment:</b>{item.department}<b>|Rating:</b>{item.rating}</span> 
          {/* <span >Deprtment:{item.department} |</span> */}
          {/* <span >Rating:{item.rating}</span> */}
         {/* </div> */}

         </div>
        )
      })}
      </div>
      </>
    )
  }
}
