import { createContext, useContext, useState } from "react";
import "./Theme.css";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [temEscuro, setTemEscuro] = useState(true);

  function alternarTema() {
    setTemEscuro((anterior) => !anterior);
  }

  return (
    <ThemeContext.Provider value={{ temEscuro, alternarTema }}>
      <div className={temEscuro ? "tema-escuro" : "tema-claro"}>
        {children}{" "}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
