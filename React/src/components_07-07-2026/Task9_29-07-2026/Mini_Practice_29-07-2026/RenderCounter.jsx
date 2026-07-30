import { useRef } from 'react';

function RenderCounter() {
  const renders = useRef(0);
  renders.current++;

  return <p>Rendered: {renders.current}</p>;
}

export default RenderCounter;