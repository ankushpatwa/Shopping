import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './Cooker.jpg'
import img2 from './gas.jpg'
import img3 from './tava.jpg'
import img4 from './bass.jpg'
import img5 from './water.jpg'

export default function Products() {
    const containerStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '600px', // Adjust based on your design
        margin: '1rem auto',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center',
        boxSizing: 'border-box',
        padding: '1rem',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        display: 'block',
    };

    const descriptionStyle = {
        padding: '1rem',
        fontSize: '1rem',
        color: '#333',
        backgroundColor: '#f9f9f9',
    };
    return (
        <div>
            <div style={containerStyle}>
                <img src={img1} alt="something" style={imageStyle} />
                <p style={descriptionStyle}>
                    Vinod Magic Stainless Steel Smart 3 in 1 Pressure Cooker 3.5 Litre | 5mm Thick Base | All in One Cooker with Strainer & Glass Lid | Induction and Gas...
                </p>
                <p>Price : ₹ 3,499</p>
                <Link to="/detail">Buy Now</Link>
            </div>


            <div style={containerStyle}>
                <img src={img2} alt="something" style={imageStyle} />
                <p style={descriptionStyle}>
                Vidiem Gas Stove G3 121 A Air Plus (Orange And Black) | 3 Burner Gas Stove Frameless | 8Mm Toughened Glass Gas Stove | Manual Ignition | 2 Years Warranty,...
                </p>
                <p>Price : ₹ 7,898</p>
                <Link to="/detail">Buy Now</Link>
            </div>
            <div style={containerStyle}>
                <img src={img3} alt="something" style={imageStyle} />
                <p style={descriptionStyle}>
                Hawkins Nonstick Appe Pan with Glass Lid, 12 Cups, Diameter 22 cm, Black , Cast Aluminium, Red
                </p>
                <p>Price : ₹ 1,170</p>
                <Link to="/detail">Buy Now</Link>
            </div>
            <div style={containerStyle}>
                <img src={img4} alt="something" style={imageStyle} />
                <p style={descriptionStyle}>
                TEX-RO Utensils Basket Drainer & Dish Drainer Basket for Kitchen/Utensil Stand for Kitchen/Dish Drying Rack with Drainer/Bartan Stand/Dish Rack for Kitchen(Size- 56x43x23 CM/Chrome Finish)
                </p>
                <p>Price : ₹ 1,098</p>
                <Link to="/detail">Buy Now</Link>
            </div>
            <div style={containerStyle}>
                <img src={img5} alt="something" style={imageStyle} />
                <p style={descriptionStyle}>
                HUL Pureit Eco Water Saver Mineral RO+UV+MF AS wall mounted/Counter top Black 10L | Upto 60% Water Savings | Water Purifier
                </p>
                <p>Price : ₹ 12,999</p>
                <Link to="/detail">Buy Now</Link>
            </div>
        </div>
    )
}
