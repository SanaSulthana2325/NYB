
import { useSearchParams } from "react-router-dom";

function Search() {

  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  return (
    <div className="card">

      <h1>Search Page</h1>

      <p>
        Search value: {name}
      </p>

    </div>
  );
}

export default Search;