import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainMap = () => {
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
        <div className='temp-map'>{/* Temporary page content goes here */}</div>
      ) : (
        <section className='main-entrance fade-in'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'></div>
            </div>
          </div>
          <div className='navigation'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='navlinks'>
                    <div className='d-flex justify-content-between w-100'>
                      <a
                        onClick={() => handleNavigation('/distribution')}
                        href='/#/temp-map'
                      >
                        DISTRIBUTION
                      </a>
                      <a
                        onClick={() => handleNavigation('/energy-services')}
                        href='/#/temp-map'
                      >
                        ENERGY SERVICES
                      </a>
                      <a
                        onClick={() => handleNavigation('/the-arena')}
                        href='/#/temp-map'
                      >
                        THE ARENA
                      </a>
                    </div>
                    <div className='d-flex justify-content-between w-100'>
                      <a
                        onClick={() => handleNavigation('/generation')}
                        href='/#/temp-map'
                      >
                        GENERATION
                      </a>
                      <a
                        onClick={() => handleNavigation('/transmission')}
                        href='/#/temp-map'
                      >
                        TRANSMISSION
                      </a>
                      <a
                        onClick={() => handleNavigation('/youth-hub')}
                        href='/#/temp-map'
                      >
                        YOUTH HUB
                      </a>
                    </div>
                    <div className='d-flex justify-content-between w-72'>
                      <a
                        onClick={() => handleNavigation('/hq')}
                        href='/#/temp-map'
                      >
                        THE HQ
                      </a>
                      <a
                        onClick={() => handleNavigation('/water-solutions')}
                        href='/#/temp-map'
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

export default MainMap;
