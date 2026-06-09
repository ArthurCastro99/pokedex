import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [temEscuro, setTemEscuro] = useState(false);

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
