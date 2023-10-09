
import React, { useState } from 'react';
import './Signupform.css'; 

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="signup-form">
      <h1>Sign-up now</h1>

      <form onSubmit={handleSubmit}>


       

        <div className="form-group">
         
          <input
            type="email"
            placeholder='your email....'
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

        </div>
        <div className="form-group">
      
          <input
            type="password"
            placeholder='your password....'
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{display:"flex", justifyContent:"space-evenly",alignItems:"center"}} >
        <div> 
            <input style={{marginLeft:"10px"}}  type="checkbox"/>  
        </div> 
        <div>
          <p2 style={{marginLeft:"0px"}}> I agree to the terms of services</p2>
        </div>
       
        </div>
        <br/>
       
        <button  type="submit">Sign Up</button>
       
        <br/>
        <br/>
        <p1>------------------or------------------</p1>
        <br/>
        <br/>
        <button  type="submit">Login via twitter</button>
        <br/>
        <br/>
        <p1>Do you have an account? <b>Sign-in</b></p1>
      </form>
    </div>
  );
};

export default SignupForm;
