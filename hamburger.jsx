import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // React icons library

const StaffGrid = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={styles.container}>
      {/* Header with Hamburger Menu */}
      <header style={styles.header}>
        <FaBars onClick={toggleSidebar} style={styles.hamburger} />
        <h2 style={styles.title}>STAFF GRID</h2>
        <div style={styles.userSection}>
          <span style={styles.searchIcon}>🔍</span>
          <span style={styles.userName}>Name</span>
        </div>
      </header>

      {/* Sidebar */}
      <div style={{ ...styles.sidebar, left: isSidebarOpen ? '0' : '-250px' }}>
        <ul style={styles.sidebarMenu}>
          <li>Profile</li>
          <li>Projects</li>
          <li>Apply Leave</li>
          <li>Performance</li>
          <li>Salary</li>
          <li>Change Password</li>
          <li>Register</li>
          <li>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Placeholder for main content */}
        <p>Main content here...</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E0F7FA',
    height: '100vh',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#B2EBF2',
  },
  title: {
    fontSize: '24px',
  },
  hamburger: {
    cursor: 'pointer',
    fontSize: '24px',
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  searchIcon: {
    fontSize: '18px',
  },
  userName: {
    fontSize: '18px',
  },
  sidebar: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '250px',
    height: '100%',
    backgroundColor: '#006064',
    color: '#fff',
    padding: '20px',
    transition: '0.3s',
    zIndex: '1',
  },
  sidebarMenu: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  mainContent: {
    flexGrow: '1',
    padding: '20px',
  },
};

export default StaffGrid;
