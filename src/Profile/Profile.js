import React from "react";

function Profile({ fullName, bio, profession, handleName,children }) {
  const stylesObject = { color: "red", textAlign: "center" };
  return <div style={stylesObject}>
      <h3>{fullName}</h3>
      <p>{bio}</p>
      <p>{profession}</p>
      <img src={children}/>
      <br/>
      <a href="" onClick={handleName}>
          Click me
      </a>
  </div>;
}

export default Profile;
