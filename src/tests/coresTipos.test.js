import { describe, it, expect } from "vitest";
import { coresTipos } from "../utils/coresTipos";

describe("coresTipos", () => {
  it("deve ter a cor correta para o tipo fire", () => {
    expect(coresTipos.fire).toBe("#FF4500");
  });

  it("deve ter a cor correta para o tipo water", () => {
    expect(coresTipos.water).toBe("#1E90FF");
  });

  it("deve retornar uma cor para todos os tipos principais", () => {
    const tiposPrincipais = [
      "fire",
      "water",
      "grass",
      "electric",
      "ice",
      "fighting",
      "poison",
      "ground",
      "flying",
      "psychic",
      "bug",
      "rock",
      "ghost",
      "dragon",
      "dark",
      "steel",
      "fairy",
      "normal",
    ];

    tiposPrincipais.forEach((tipo) => {
      expect(coresTipos[tipo]).toBeDefined();
    });
  });
});
