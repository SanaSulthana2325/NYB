import ReactDOM from "react-dom/client";
import App from "./App";
import { RestaurantProvider } from "./context/RestaurantContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RestaurantProvider>
        <App />
    </RestaurantProvider>
);