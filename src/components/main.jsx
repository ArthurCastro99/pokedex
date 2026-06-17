import "./main.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { coresTipos } from "../utils/coresTipos";

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [tipos, setTipos] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) => setTipos(data.results));
  }, []);

  useEffect(() => {
    if (tipoSelecionado) return;

    let ignorar = false;

    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const detalhes = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json()),
        );

        Promise.all(detalhes).then((pokemonsCompletos) => {
          if (!ignorar) {
            setPokemons((pokemonsAnteriores) => [
              ...pokemonsAnteriores,
              ...pokemonsCompletos,
            ]);
          }
        });
      });
    return () => {
      ignorar = true;
    };
  }, [offset, tipoSelecionado]);

  useEffect(() => {
    if (!tipoSelecionado) return;

    fetch(`https://pokeapi.co/api/v2/type/${tipoSelecionado}`)
      .then((res) => res.json())
      .then((data) => {
        const detalhes = data.pokemon.map((item) =>
          fetch(item.pokemon.url).then((res) => res.json()),
        );

        Promise.all(detalhes).then((pokemonsCompletos) => {
          setPokemons(pokemonsCompletos);
        });
      });
  }, [tipoSelecionado]);

  function handleFiltro(e) {
    setTipoSelecionado(e.target.value);
    setPokemons([]);
    setOffset(0);
  }

  return (
    <>
      <main>
        <div className="apresentacao">
          <h1>Pokédex</h1>
          <p>Bem-vindo à sua Pokédex!</p>
        </div>

        <div className="containerPokemons">
          <section className="filtro">
            <h2>Filtrar por tipo:</h2>
            <select onChange={handleFiltro} value={tipoSelecionado}>
              <option value="">Todos</option>
              {tipos.map((tipo) => (
                <option key={tipo.name} value={tipo.name}>
                  {tipo.name}
                </option>
              ))}
            </select>
          </section>

          <ul>
            {pokemons.map((pokemon) => {
              return (
                <li
                  key={pokemon.name}
                  onClick={() => navigate(`/pokemon/${pokemon.name}`)}
                >
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <p>{pokemon.name}</p>

                  <div>
                    {pokemon.types.map((item) => (
                      <span
                        key={item.type.name}
                        style={{
                          backgroundColor: coresTipos[item.type.name],
                        }}
                      >
                        {item.type.name}
                      </span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
          {!tipoSelecionado && (
            <button onClick={() => setOffset(offset + 10)}>
              Carregar mais
            </button>
          )}
        </div>
      </main>
    </>
  );
}
