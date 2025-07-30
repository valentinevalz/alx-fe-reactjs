// alx-react-app-props/src/UserDetails.jsx
import React, { useContext } from 'react'; // We need 'useContext' to open the secret box!
import UserContext from './UserContext'; // Get our secret box

function UserDetails() {
  // Now we open the secret box and get the user's data directly!
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid purple', padding: '10px', margin: '10px', borderRadius: '5px', backgroundColor: '#f3e5f5' }}>
      <p style={{ color: 'darkblue', fontWeight: 'bold' }}>Name: {userData.name}</p>
      <p style={{ color: 'darkgreen' }}>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;