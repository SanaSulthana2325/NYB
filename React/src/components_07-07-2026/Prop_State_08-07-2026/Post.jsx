import { useState } from "react";

function Post(props) {

  const [likes, setLikes] = useState(0);

  return (
    <>
      <h2>{props.title}</h2>

      <h3>Likes: {likes}</h3>

      <button
        onClick={() => setLikes(likes + 1)}
      >Like
      </button>
      </> 
  )
}


export default Post;





//  <h2>{props.movieName}</h2>

//       <h3>Booked Tickets: {tickets}</h3>

//       <button
//         onClick={() => setTickets(tickets + 1)}
//       >
//         Book Ticket
//       </button>






 // | Component | Props                | State                 |
// | --------- | -------------------- | --------------------- |
// | Student   | Name                 | Attendance            |
// | Product   | Name, Price          | Quantity              |
// | Employee  | Name, Initial Salary | Current Salary        |
// | Post      | Title                | Likes                 |
// | Movie     | Movie Name           | Booked Tickets        |
// | User      | Name                 | Online/Offline Status |
