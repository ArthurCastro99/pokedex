import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext";
import DetalhesPokemon from "./pages/DetalhesPokemon";

function App() {
  return (
    <>
      <ThemeProvider>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/pokemon/:nome" element={<DetalhesPokemon />} />
          </Routes>
          <Footer />
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
