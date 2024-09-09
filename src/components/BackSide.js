import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BackSide = () => {
  const [tempRedirect, setTempRedirect] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setTempRedirect(true); // Show the temporary page or loading indicator
    setTimeout(() => {
      navigate(path); // Navigate to the respective page after 4 seconds
    }, 4000); // 4 seconds delay
  };

  return (
    <div>
      {tempRedirect ? (
        <div className='temp-map-back'>{/* Temporary page content goes here */}</div>
      ) : (
        <section className='back fade-in'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
             </div>
            </div>
          </div>
          <div className='navigation'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='navlinks'>
 <div className='d-flex justify-content-between w-100'>
                    <a
                      onClick={() => handleNavigation('/distributionback')}
                      href='/#/temp-map-back'
                    >
                      DISTRIBUTION
                    </a>
                    <a
                      onClick={() => handleNavigation('/energy-services-back')}
                      href='/#/temp-map-back'
                    >
                      ENERGY SERVICES
                    </a>
                    <a
                      onClick={() => handleNavigation('/the-arena-back')}
                      href='/#/temp-map-back'
                    >
                      THE ARENA
                    </a>
                    </div>
    <div className='d-flex justify-content-between w-100'>
                    <a
                      onClick={() => handleNavigation('/generationback')}
                      href='/#/temp-map-back'
                    >
                      GENERATION
                    </a>
                    <a
                      onClick={() => handleNavigation('/transmissionback')}
                      href='/#/temp-map-back'
                    >
                      TRANSMISSION
                    </a>
                    <a
                      onClick={() => handleNavigation('/youth-hub-back')}
                      href='/#/temp-map-back'
                    >
                      YOUTH HUB
                    </a>
                    </div>
    <div className='d-flex justify-content-between w-72'>
                    <a
                      onClick={() => handleNavigation('/hqback')}
                      href='/#/temp-map-back'
                    >
                      THE HQ
                    </a>
                    <a
                      onClick={() => handleNavigation('/water-solutions-back')}
                      href='/#/temp-map-back'
                    >
                      WATER SOLUTIONS
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BackSide;
