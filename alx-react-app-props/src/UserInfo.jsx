// alx-react-app-props/src/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails'; // Import the next component

// This component also used to get userData as a prop, but now it doesn't need to!
function UserInfo() {
  return <UserDetails />; // Just passes along the message
}

export default UserInfo;