import useWindowSize from './useWindowSize';

function Window_App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Width: {width}</h2>
      <h2>Height: {height}</h2>
    </div>
  );
}

export default Window_App;