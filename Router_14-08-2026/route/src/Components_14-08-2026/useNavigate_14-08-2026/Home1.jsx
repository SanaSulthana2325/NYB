import {useNavigate} from 'react-router-dom'

function Home1() {
    const navigate = useNavigate();
  return (
    <>
    <button onClick={() => navigate("/about1")}>Go To About</button>
    
    </>
  );
}

export default Home1;