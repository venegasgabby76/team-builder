import React, { useState } from 'react';

const MemberForm = (props) => {

    const [form , setForm] = useState({
        name: '',
        email: '',
        role: '',
    });


    const clearForm = () => {
        setForm({
        name:'', 
        email:'', 
        role:''})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(form);
        clearForm();
      };

      const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
      };



      return (
          <form onSubmit={ handleSubmit }>
              <label htmlFor="name">Name:</label>
              <input 
              id="name"
              name="name"
              type="text"
            placeholder="Type your name here."
            value={form.name}
            onChange={handleChange}
              />
              <br/>
              <label htmlFor="email">Email:</label>
              <input 
              id="email"
              name="email"
              type="text"
            placeholder="Type your email here."
            value={form.email}
            onChange={handleChange}
              />
              <br/>
              <label htmlFor="role">Role:</label>
              <input 
              id="role"
              name="role"
              type="text"
            placeholder="Type your role here."
            value={form.role}
            onChange={handleChange}
              />
              <br/>

            <button type="submit">Submit</button>
              </form>

      )
}

export default MemberForm;