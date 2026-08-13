import React, { Suspense } from 'react';

const About = React.lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./About'));
    }, 3000); // 3000 ms = 3 seconds
  })
);

function About_App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <About />
    </Suspense>
  );
}

export default About_App;