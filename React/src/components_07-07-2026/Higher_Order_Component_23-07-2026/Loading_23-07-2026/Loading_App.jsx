import User from "./User";
import withLoading from "./withLoading";

const NewUsers = withLoading(User);

function Loading_App() {

  return (
    <>
      <NewUsers
        loading={false}
        name="Sana"
      />
    </>
  );
}

export default Loading_App;