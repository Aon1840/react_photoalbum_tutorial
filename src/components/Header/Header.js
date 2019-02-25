import React from 'react'
import {Link} from 'react-router'

const Header =()=> {
    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    PhotoAlbum (Sample)
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link to ="/" className="navbar-item">Home</Link>
                        <Link to ="/user" className="navbar-item">Photo</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header