import React from "react";

const Child_WithReactMemo = React.memo(function Child() {
  console.log("Tasan Rendered");

  return (
    <div className="p-4 bg-green-100 rounded-lg">
      Child Component
    </div>
  );
});

export default Child_WithReactMemo;