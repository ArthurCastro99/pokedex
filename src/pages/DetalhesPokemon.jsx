import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DetalhesPokemon.css";
import { coresTipos } from "../utils/coresTipos";

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
                nome: item.ability.name,
                descricao: textoEmIngles
                  ? textoEmIngles.short_effect
                  : "Sem descrição disponível",
              };
            }),
        );
        Promise.all(habilidadesDetalhadas).then((resultado) => {
          setHabilidades(resultado);
        });
      }),
    );
  }, [nome]);

  if (!pokemon) return <p>Carregando...</p>;

  const idAtual = pokemon.id;

  return (
    <main className="detalhesPokemon">
      <div className="nomeSetas">
        <button
          className="setaEsquerda"
          onClick={() => navigate(`/pokemon/${idAtual - 1}`)}
          disabled={idAtual === 1}
        >
          <img
            src="/src/assets/images/detalhesPokemons/seta.png"
            alt="Seta apontando à esquerda"
          />
        </button>
        <h1>{pokemon.name}</h1>

        <button
          className="setaDireita"
          onClick={() => navigate(`/pokemon/${idAtual + 1}`)}
        >
          <img
            src="/src/assets/images/detalhesPokemons/seta.png"
            alt="Seta apontando à direita"
          />
        </button>
      </div>

      <img
        src={pokemon.sprites.other.showdown.front_default}
        alt={pokemon.name}
      />

      <h2>Tipo</h2>

      <ul className="tipoCor">
        {pokemon.types.map((item) => (
          <li
            key={item.type.name}
            style={{
              backgroundColor: coresTipos[item.type.name],
            }}
          >
            {item.type.name}
          </li>
        ))}
      </ul>

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
      <ul className="movimentos">
        {pokemon.moves.map((movimento) => (
          <li key={movimento.move.name}>
            {movimento.move.url.split("/").slice(-2, -1)[0]} -{" "}
            {movimento.move.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
