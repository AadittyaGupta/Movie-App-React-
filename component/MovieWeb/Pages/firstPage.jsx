import React from 'react';
import { useNavigate } from 'react-router-dom';;

const FirstPage = () => {
  const navigate = useNavigate();

  const handleEnterSite = () => {
    navigate('/home');
  };

   const year = new Date().getFullYear();

  return (
    <>
    <div className="cover-page">
      <div className="cover-overlay">
        <div className="cover-content">
           <div className="cover-logo">🎥</div> 
          <h1 className="cover-title">Movie App</h1>
          <p className="cover-subtitle">Your Gateway to Cinema...</p>
          <form className="cover-form">
            <input
              type="text"
              placeholder="Search Movies or Series..."
              className="cover-input"
            />
          </form>
          <button className="cover-button" onClick={handleEnterSite}>
            View Full Site
          </button>
        </div>
      </div>
      <footer className='footer'> 
        <p>copyright © {year}</p>
      </footer>
    </div>
    </>
  )
}

export default FirstPage
