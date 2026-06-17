import "../css/header.css";
import { useTheme } from "../theme/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { temEscuro, alternarTema } = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="logo">
          <img
            src="./public/images/header/icon-logo.png"
            alt="Icon poke ball"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <nav>
          <ul>
            <li onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              Home
            </li>
          </ul>
        </nav>

        <button onClick={alternarTema}>{temEscuro ? "☀️" : "🌙"}</button>
      </header>
    </>
  );
}
