import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student, setStudent] = useState("Guest");

  const login = () => {
    setStudent("Sana Sulthana");
  };

  return (
    <StudentContext.Provider value={{ student, login }}>
      {children}
    </StudentContext.Provider>
  );
}