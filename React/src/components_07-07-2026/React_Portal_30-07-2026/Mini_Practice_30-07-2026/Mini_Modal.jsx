import { useState } from "react";
import { createPortal } from "react-dom";

function Mini_Modal({ onClose }) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [focused, setFocused] = useState("");

function handleSubmit(e) {
e.preventDefault();
alert(`Email: ${email}\\nPassword: ${password}`);
onClose();
}

return createPortal( <div className="fixed inset-0 bg-black/50 flex items-center justify-center"> <div className="bg-white w-96 p-6 rounded-2xl shadow-xl"> <div className="flex justify-between items-center mb-4"> <h2 className="text-2xl font-bold">Login</h2>

```
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-red-500 text-xl"
      >
        X
      </button>
    </div>

    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused("")}
          placeholder="Enter your email"
          className={`w-full p-3 rounded-lg border ${
            focused === "email"
              ? "border-blue-500 ring-2 ring-blue-300"
              : "border-gray-300"
          }`}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Password</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setFocused("password")}
          onBlur={() => setFocused("")}
          placeholder="Enter your password"
          className={`w-full p-3 rounded-lg border ${
            focused === "password"
              ? "border-blue-500 ring-2 ring-blue-300"
              : "border-gray-300"
          }`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  </div>
</div>,
document.getElementById("portal-root")


);
}

export default Mini_Modal;
