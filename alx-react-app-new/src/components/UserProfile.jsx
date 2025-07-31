import React from 'react';

function UserProfile({ name, age, bio }) {
  const profileStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '1rem',
    margin: '1rem auto',
    maxWidth: '300px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={profileStyle}>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

export default UserProfile;
