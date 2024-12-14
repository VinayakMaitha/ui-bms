// app/layout.tsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css'; // Import your global styles here

// Define the layout component
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* Add metadata or links to external resources (e.g., Google Fonts) */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Website</title>
      </head>
      <body>
        <div className='pageBody'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
