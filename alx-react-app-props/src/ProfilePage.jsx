// alx-react-app-props/src/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo'; // Import the next component

// This component used to get userData as a prop, but now it doesn't need to!
function ProfilePage() {
  return <UserInfo />; // It just passes along the message without looking inside
}

export default ProfilePage;