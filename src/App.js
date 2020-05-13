import React, { useState } from 'react';
import './App.css';
import MemberForm from './MemberForm';


function App() {

const [ members, setMembers] = useState([
  {
    name: "",
    email: "",
    role: "", 
  }
]);



const addMember = members => {
    const newMember = {
      name: members.name,
      email: members.email,
      role: members.role,
    }

    setMembers([...members, newMember]);
}


  return (
    <div className="App">
      <h1>TEAM BUILDER PROJECT</h1>
      <MemberForm addMember={addMember} />
    </div>
  );
}

export default App;
