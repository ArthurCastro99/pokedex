import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetalhesPokemon from "../pages/DetalhesPokemon";

// Mock da API
const pokemonMock = {
  id: 1,
  name: "bulbasaur",
  sprites: {
    other: {
      showdown: { front_default: "https://imagem.png" },
    },
  },
  types: [{ type: { name: "grass" } }],
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
    },
  ],
  moves: [
    { move: { name: "tackle", url: "https://pokeapi.co/api/v2/move/33/" } },
  ],
};

const habilidadeMock = {
  effect_entries: [
    { language: { name: "en" }, short_effect: "Powers up Grass-type moves." },
  ],
};

describe("DetalhesPokemon", () => {
  it("deve exibir o nome do pokemon", async () => {
    // Simula as respostas da API
    vi.spyOn(global, "fetch")
      .mockResolvedValueOnce({
        json: () => Promise.resolve(pokemonMock),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(habilidadeMock),
      });

    render(
      <MemoryRouter initialEntries={["/pokemon/bulbasaur"]}>
        <Routes>
          <Route path="/pokemon/:nome" element={<DetalhesPokemon />} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    });
  });

  it("deve exibir o tipo do pokemon", async () => {
    vi.spyOn(global, "fetch")
      .mockResolvedValueOnce({
        json: () => Promise.resolve(pokemonMock),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(habilidadeMock),
      });

    render(
      <MemoryRouter initialEntries={["/pokemon/bulbasaur"]}>
        <Routes>
          <Route path="/pokemon/:nome" element={<DetalhesPokemon />} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText("grass")).toBeInTheDocument();
    });
  });
});
