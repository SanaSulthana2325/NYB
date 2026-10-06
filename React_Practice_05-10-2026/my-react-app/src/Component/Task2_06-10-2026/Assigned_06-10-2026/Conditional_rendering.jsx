import { useState } from "react";

function Qa() {
  const [isOnline, setIsOnline] = useState(false);

  if (isOnline) {
    return (
      <div>
        <h1>User is Online</h1>
        <button onClick={() => setIsOnline(false)} className="bg-red-300 px-2 py-2">
          Go Offline
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>User is Offline</h1>
        <button onClick={() => setIsOnline(true)} className="bg-green-400 px-2 py-2">
          Go Online
        </button>
      </div>
    );
  }
}

export {Qa};