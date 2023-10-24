import React from 'react';

const Header = () => {
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Home
                </a>
                
                    <ul className="navbar-nav">
                        <li className="nav-item">Hero</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Service</li>
                        <li className="nav-item">Project</li>
                        <li className="nav-item">Footer</li>
                    </ul>
             
          </div>
      </nav>
      
    );
};

export default Header;