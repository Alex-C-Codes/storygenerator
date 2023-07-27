import React, { useState } from 'react';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Content from './pages/Content';
import ContentCreation from './pages/ContentCreation';

// Define the homepage component
export default function PortfolioContainer() {
  const [activeTab, setActiveTab] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App-header">
      <nav className='nav-bar'>
        <div className='nav-header'>
          <h1 className='nav-title'>
            <div 
              className={activeTab === 'home' ? 'active' : ''}
              onClick={() => handleTabChange('home')}
            >
              Muse
            </div>
          </h1>
          <ul className='nav-list'>
            <li
              className={activeTab === 'home' ? 'active' : ''}
              onClick={() => handleTabChange('home')}
            >
              Home
            </li>
            <li
              className={activeTab === 'content' ? 'active' : ''}
              onClick={() => handleTabChange('content')}
            >
              Content
            </li>
            <li
              className={activeTab === 'contentCreation' ? 'active' : ''}
              onClick={() => handleTabChange('contentCreation')}
            >
              Upload Story
            </li>
            <li
              className={activeTab === 'about' ? 'active' : ''}
              onClick={() => handleTabChange('about')}
            >
              About
            </li>
          </ul>
        </div>
      </nav>

      <div className='content-wrapper'>
        
        <div className='column-left'></div>

        <div className="content">
          {activeTab === '' && <Homepage />}
          {activeTab === 'home' && <Homepage />}
          {activeTab === 'content' && <Content />}
          {activeTab === 'contentCreation' && <ContentCreation />}
          {activeTab === 'about' && <About />}
        </div>
        
        <div className='column-right'></div>

      </div>
      
      <footer className='alexSignature'>
        <p>Website designed and made with &#x2764; by <a href='https://portfoliopage.herokuapp.com/#about'>Alex C</a></p>
      </footer>

    </div>
  );
}