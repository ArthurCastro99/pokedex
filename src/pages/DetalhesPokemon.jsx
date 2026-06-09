import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DetalhesPokemon() {
  const { nome } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [habilidades, setHabilidades] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`).then((response) =>
      response.json().then((data) => {
        setPokemon(data);

        const habilidadesDetalhadas = data.abilities.map((item) =>
          fetch(item.ability.url)
            .then((res) => res.json())
            .then((habilidade) => {
              const textoEmIngles = habilidade.effect_entries.find(
                (entry) => entry.language.name === "en",
              );
              return {
                nome: item.habilidade.name,
                descricao: textoemIngles
                  ? textoEmIngles.short_effect
                  : "Sem descrição disponível",
              };
            }),
        );
        Promise.all(buscaHabilidades).then((resultado) => {
          setHabilidades(resultado);
        });
      }),
    );
  }, [nome]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <main>
      <button onclick={() => navigate(-1)}>Voltar</button>

      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <h2>Habilidades</h2>
      <ul>
        {habilidades.map((habilidade) => (
          <li key={habilidade.nome}>
            <h3>{habilidade.nome}</h3>
            <p>{habilidade.descricao}</p>
          </li>
        ))}
      </ul>
      <h2>Movimentos</h2>
      <ul>
        {pokemon.moves.map((movimento) => (
          <li key={movimento.move.name}>{movimento.move.name}</li>
        ))}
      </ul>
    </main>
  );
}
