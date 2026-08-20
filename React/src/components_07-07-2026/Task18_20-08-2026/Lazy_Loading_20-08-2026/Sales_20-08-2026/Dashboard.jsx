import React, { lazy, Suspense } from "react";

// Add a 3-second delay to see the loading state
const SalesChart = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./SalesChart"));
    }, 3000);
  });
});

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Total Sales: ₹50,000</p>
      <p>Total Users: 1,250</p>

      <hr />

      <h2>Sales Chart</h2>

      <Suspense fallback={<p> Loading Sales Chart...</p>}>
        <SalesChart />
      </Suspense>

      <hr />

      <h2>Reports</h2>
      <p>Monthly sales report is available.</p>
    </div>
  );
}

export default Dashboard;