import React, { useState, useEffect } from 'react';

export default function ScreenSize() {
  const [screenSize, getDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  return screenSize;
}