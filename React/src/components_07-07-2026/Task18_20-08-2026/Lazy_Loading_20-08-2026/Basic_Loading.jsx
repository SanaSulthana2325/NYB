import React,{lazy, Suspense} from 'react'
const About = lazy(() => import("./About"));

function Basic_Loading() {
  return (
    <div>
        <h1>My React App</h1>
    <Suspense fallback={<p>Loading About...</p>}>
        <About/>
    </Suspense>
    </div>
  )
}



export default Basic_Loading