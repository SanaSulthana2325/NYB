import React,{lazy,Suspense} from "react";
const Profile = lazy(()=> import("./Profile"));

function Profile_App() {
  return (
    <>
    <h1>User App</h1>

    <Suspense fallback={<h3>Loading Profile.......</h3>}>
    <Profile/>
    </Suspense>
    </>
  )
}

export default Profile_App