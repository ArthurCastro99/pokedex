import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../theme/ThemeContext";
function BotaoTema() {
  const { temEscuro, alternarTema } = useTheme();
  return (
    <button onClick={alternarTema}>
      {temEscuro ? "Tema Escuro" : "Tema Claro"}
    </button>
  );
}

describe("ThemeContext", () => {
  it("deve iniciar com tema Escuro", () => {
    render(
      <ThemeProvider>
        <BotaoTema />
      </ThemeProvider>,
    );
    expect(screen.getByText("Tema Escuro")).toBeInTheDocument();
  });

  it("deve alternar para tema claro ao clicar", () => {
    render(
      <ThemeProvider>
        <BotaoTema />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText("Tema Escuro"));
    expect(screen.getByText("Tema Claro")).toBeInTheDocument();
  });

  it("deve voltar para tema escuro ao clicar novamente", () => {
    render(
      <ThemeProvider>
        <BotaoTema />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText("Tema Escuro"));
    fireEvent.click(screen.getByText("Tema Claro"));
    expect(screen.getByText("Tema Escuro")).toBeInTheDocument();
  });
});
