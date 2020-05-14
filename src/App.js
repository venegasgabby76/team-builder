import React, { useState } from 'react';
import './App.css';
import MemberForm from './MemberForm';
import Members from './Members';


function App() {

const [ members, setMembers] = useState([
  {
    name: "",
    email: "",
    role: "", 
  }
]);



 const addMember = newMember => {
//     const newMember = {
//       name: members.name,
//       email: members.email,
//       role: members.role,
//     }

    setMembers([...members, newMember]);
}


  return (
    <div className="App">
      <h1>TEAM BUILDER PROJECT</h1>
      <MemberForm addMember={addMember} />
      {/* {members.map ( ( member)=> {
          return <h1>{member.name}</h1>
      })} */}
      <Members data={members}/>
    </div>
  );
}

export default App;
