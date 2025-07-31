import React from 'react';

const MainContent = () => {
  const styles = {
    content: {
      padding: '20px',
      textAlign: 'center',
    }
  };

  return (
    <main style={styles.content}>
      <h2>This is the main content of the application</h2>
    </main>
  );
};

export default MainContent;
