import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclsive Offers On Your Emali</h1>
        <p>Subscribe to Our Newsletter and stay Updated</p>
        <div>
            <input type="email" placeholder='Your Email Address' />
            <button>Subscribe</button>
        </div>
    </div>
    
  );
};

export default NewsLetter;
