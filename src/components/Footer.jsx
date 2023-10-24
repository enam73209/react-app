import React from 'react';

const Footer = () => {
    const Name="Enam";
    return (
        <footer className="footer ">
        <div className="container">
        
          <p>&copy; {new Date().getFullYear()}  {Name || "Md Enamul Haque"}</p>
        </div>
      </footer>
    );
};

export default Footer;