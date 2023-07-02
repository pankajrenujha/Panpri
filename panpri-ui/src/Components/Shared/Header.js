import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>This is Header
            {/* <Link to="/" >  Home  </Link> 
             <Link to="/product" >  product </Link>  */}
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/student">Student</NavLink>
            </div>
        </div>

    )
}

export default Header;

