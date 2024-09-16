import React from 'react'
import {Link} from 'react-router-dom'


// import Products from './Products'


export default function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: '#fff',
  };

  const brandNameStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const navStyle = {
    display: 'flex',
  };

  const navLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '1rem',
  };

  const navLinkHoverStyle = {
    textDecoration: 'underline',
  };

  const responsiveStyle = {
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  };
  return (
    <div>
       <header style={headerStyle}>
      <div style={brandNameStyle}>MyBrand</div>
      <nav style={navStyle}>
        <Link style={navLinkStyle} to="/Products">Product</Link>
        <Link style={navLinkStyle} to="/about">About</Link>
        <Link style={navLinkStyle} to="/contact">Contact</Link>
      </nav>
    </header>
    </div>
  )
}
