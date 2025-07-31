import React from 'react';

function UserProfile() {
  const user = {
    name: 'Valentine Jide',
    email: 'odedeyivaz@gmail.com',
    occupation: 'Software Engineer',
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '20px auto', width: '300px' }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Occupation:</strong> {user.occupation}</p>
    </div>
  );
}

export default UserProfile;
