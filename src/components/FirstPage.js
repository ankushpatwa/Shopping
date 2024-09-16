import React from 'react'

export default function FirstPage() {
  const bodyStyle = {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
};

// Inline styles for the box
const boxStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'center',
};

// Inline styles for the heading
const headingStyle = {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '10px',
    marginTop: 0,
};

// Inline styles for the paragraph
const paragraphStyle = {
    fontSize: '1.1em',
    color: '#666',
    marginTop: 0,
};

  return (
    <div style={bodyStyle}>
            <div style={boxStyle}>
                <h1 style={headingStyle}>Welcome to MY Shopping Website</h1>
                <p style={paragraphStyle}>We're glad you're here. Explore our content and discover more about what we offer.</p>
                <p style={paragraphStyle}>You can easily tap Click Products Button Showing on header to View our products.</p>
            </div>
        </div>
  )
}
