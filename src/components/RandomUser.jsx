import React from "react";
import "./RandomUser.css";

//refactored as a function
function RandomUser(props) {
    //passing data to the component via props
    const { userData } = props;
    //accessing the props
    return (
        <div className="container">
        <ul>
            {userData.map((user)=>(
                //every li should have a key if you map through data in React
                <li className="user-card" key={user.login.uuid}>
                    <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`}></img>
                    <p>{user.name.first} {user.name.last}</p>
                    <p>{user.email}</p>
                    <p>{user.cell}</p>
                </li>
            ))}     
        </ul>
        </div>


    );

}

export default RandomUser