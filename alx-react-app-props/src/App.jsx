// alx-react-app-props/src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Bring in our secret box!

function App() {
  // This is the secret message we want to share
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // We wrap our ProfilePage with the secret box, and put the message inside it
    <UserContext.Provider value={userData}>
      <h1>User Profile with Context API</h1>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;