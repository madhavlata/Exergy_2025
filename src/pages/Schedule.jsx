import React from "react";

const Schedule = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Schedule</h1>
      <p style={styles.message}>To Be Announced Soon...</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    // backgroundColor: "#f8f9fa",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#007bff",
  },
  message: {
    fontSize: "1.5rem",
    color: "white",
  },
};

export default Schedule;
