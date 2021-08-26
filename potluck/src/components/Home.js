import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            {/* Central hub for webpage and navigation*/}
            <div className='header-img'>
                <h1 className='home-heading'>Welcome to your Potluck Planner</h1>
            </div>

            <div className='home-card-container'>
                <div className='home-img-card'>
                   
                </div>

                <div className='home-info-card'>
                    <h3>Create A New Potluck</h3>
                    <Link to='/addPotluck'>Get Started</Link>    
                </div>

                <div className='home-info-card'>
                    <h3>View Existing Potlucks</h3>
                    <Link to='/potlucks'>Get Started</Link>
                </div>

                <div className='home-img-card'>

                </div>
            </div>
        </div>
    )
}

export default Home

