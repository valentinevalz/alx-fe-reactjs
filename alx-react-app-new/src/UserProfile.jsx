// alx-react-app-new/src/components/UserProfile.jsx
import React from 'react';

const UserProfile = (props) => {
  return (
    // Adding style to the main box of the profile card
    <div style={{ border: '2px solid #aaddff', padding: '15px', margin: '15px', borderRadius: '10px', backgroundColor: '#e0f7fa' }}>
      {/* Adding style to the name */}
      <h2 style={{ color: '#0056b3', fontSize: '24px', marginBottom: '8px' }}>{props.name}</h2>
      {/* Adding style to the age */}
      <p style={{ fontSize: '16px', margin: '4px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span>
      </p>
      {/* Adding style to the bio */}
      <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
