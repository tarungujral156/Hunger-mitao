import React from 'react';
import ReactDOM from 'react-dom';




/**
 * 
 * Header
 * - logo
 * - NavItems
 * Body
 * - SearchBarContaier
 * - Restaurants
 *   - RestaurantCards
 * Footer
 * 
 */



const Header = () => {  
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src='https://www.creativefabrica.com/wp-content/uploads/2020/02/12/Food-Logo-Graphics-1-99-580x386.jpg' alt='brand-Logo'></img>
            </div>
            <nav>
                <ul className='nav-items'>
                    <li>Search</li>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    )
}


const App = ()=>{
    return <Header />
};


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)