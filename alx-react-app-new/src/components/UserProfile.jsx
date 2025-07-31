import React from 'react';

const UserProfile = () => {
  const profileStyle = {
    border: '1px solid gray',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    margin: '10px'
  };

  const nameStyle = {
    color: 'blue'
  };

  return (
    <div style={profileStyle}>
      <h2>User Profile</h2>
      <span style={nameStyle}>Name: Valentine Jide</span>
    </div>
  );
};

export default UserProfile;
