import Header from "./components/home/header";
import Main from "./components/home/main";
import Footer from "./components/home/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext";
import DetalhesPokemon from "./pages/DetalhesPokemon";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/pokemon/:nome" element={<DetalhesPokemon />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
