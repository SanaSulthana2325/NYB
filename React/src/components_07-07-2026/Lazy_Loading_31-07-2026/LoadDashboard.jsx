import React, { useEffect } from 'react';

function LoadDashboard() {
  useEffect(() => {
    console.log('App started');

    function loadDashboard() {
      console.log('Dashboard loaded');
    }

    const timer = setTimeout(() => {
      loadDashboard();
    }, 3000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>React setTimeout Example</h1>
      <p>Open the browser console and wait for 3 seconds.</p>
    </div>
  );
}

export default LoadDashboard;