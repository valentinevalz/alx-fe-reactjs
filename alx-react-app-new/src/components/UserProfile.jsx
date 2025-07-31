import React from 'react';

const UserProfile = ({ name, age }) => {
  const styles = {
    profile: {
      padding: '10px',
      border: '1px solid #ccc',
      margin: '10px',
      borderRadius: '8px'
    },
    name: {
      fontWeight: 'bold',
      fontSize: '18px'
    },
    age: {
      color: 'gray'
    }
  };

  return (
    <div style={styles.profile}>
      <p style={styles.name}>Name: {name}</p>
      <p style={styles.age}>Age: {age}</p>
    </div>
  );
};

export default UserProfile;
