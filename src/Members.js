import React from 'react';

function Members (props) {
    return ( 
        <div className="member">
            {props.data.map( (member , id) =>{
                return (
               <div key={id}>
                <h1>{member.name}</h1>
                <p>{member.email}</p>
                <p>{member.role}</p>
                </div>
                )
            })}
        </div>
    )
}



export default Members;

