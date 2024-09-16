import React from 'react'
import {Link} from 'react-router-dom'

export default function Payment() {

  return (

    

  
    <div>

      <div style={{
        maxWidth: '300px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Payment Form</h2>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="upiId" style={{ display: 'block', marginBottom: '5px' }}>UPI ID:</label>
            <input type="text" id="upiId" name="upiId" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
            <input type="password" id="password" name="password" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          </div>
         <Link to="/thanks">Pay Now</Link>
        </form>
      </div>

    </div>
  )
}
