import React from 'react'
import {Link} from 'react-router-dom'

export default function Details() {
    const styles = {
        formContainer: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            width: '100%',
            margin: 'auto',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
        textarea: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
        formButtons: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        submitButton: {
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            transition: 'background-color 0.3s',
        },
        clearButton: {
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            backgroundColor: '#6c757d',
            color: '#fff',
            transition: 'background-color 0.3s',
        },
    };






    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    const handleReset = () => {
        // Handle form reset if needed
    };
  return (
    <div>

        <h1>Enter Your Details and Delivery Address</h1>
        <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="phone" style={styles.label}>Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Gmail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="address" style={styles.label}>Address</label>
                    <textarea
                        id="address"
                        name="address"
                        rows="4"
                        required
                        style={styles.textarea}
                    ></textarea>
                </div>
                <div style={styles.formButtons}>
                    <Link to='/Payment'>NEXT STEP</Link>
                    <button type="button" onClick={handleReset} style={styles.clearButton}>Clear</button>
                </div>
            </form>
        </div>
    </div>
  )
}
