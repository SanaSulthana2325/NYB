import React, { lazy, Suspense, useState } from "react";

const Profile = lazy(() => import("./Profile_Button"));

function Button() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <h1>My React App</h1>

      <button
        onClick={() => setShowProfile(true)}
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        Show Profile
      </button>

      {showProfile && (
        <Suspense fallback={<h3>Loading Profile...</h3>}>
          <Profile />
        </Suspense>
      )}
    </div>
  );
}

export default Button;