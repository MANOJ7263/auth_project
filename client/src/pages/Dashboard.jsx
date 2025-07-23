import React from 'react';

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1>Welcome to your Dashboard</h1>
      <p>This is a protected page accessible after login.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
};

export default Dashboard;
