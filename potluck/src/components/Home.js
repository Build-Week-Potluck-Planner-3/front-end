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
                <div className='home-card'>
                    <Link to='/addPotluck'>
                        <img className='home-card-img' src='https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60'></img>
                        <p>Create A New Potluck</p>
                    </Link>

                </div>
                <div className='home-card'>
                    <Link to='/potlucks'>
                        <img className='home-card-img' src='https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80'></img>
                        <p>View Existing Potlucks</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
