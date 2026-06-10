import Header from "./components/home/header";
import Main from "./components/home/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme/ThemeContext";
import DetalhesPokemon from "./pages/DetalhesPokemon";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/pokemon/:nome" element={<DetalhesPokemon />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
