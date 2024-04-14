import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt 
            className='Tilt br2 shadow-2 parallax-effect'
            perspective={500}
            style={{ height: '250px', width: '250px' }}>
                <div className='pa5 inner-element'>
                    <img style={{paddingTop: '5px'}} alt='brain' src={brain}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;