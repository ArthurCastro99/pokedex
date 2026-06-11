import "./header.css";
import { useTheme } from "./../theme/ThemeContext";

export default function Header() {
  const { temEscuro, alternarTema } = useTheme();

  return (
    <>
      <header>
        <div className="logo">
          <a href="http://localhost:5173/">
            <img
              src="./../../../src/assets/images/header/icon-logo.png"
              alt="Icon poke ball"
            />
          </a>
        </div>

        <button onClick={alternarTema}>{temEscuro ? "☀️" : "🌙"}</button>
      </header>
    </>
  );
}
