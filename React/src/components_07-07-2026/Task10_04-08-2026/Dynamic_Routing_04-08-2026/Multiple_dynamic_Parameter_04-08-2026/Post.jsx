import {useParams} from "react-router-dom";

function Post() {
    const {userId, postId} = useParams();
  return (
    <div >
        <h2 className="font-bold">Multiple Dynamic Parameter</h2>
        <h2>User ID:{userId}</h2>
        <h2>Post Id: {postId}</h2>
    </div>
  )
}

export default Post