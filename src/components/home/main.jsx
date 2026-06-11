import "./main.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
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
  }, [offset]);

  return (
    <>
      <main>
        <div className="apresentacao">
          <h1>Pokédex</h1>
          <p>Bem-vindo à sua Pokédex!</p>
        </div>
        <div className="containerPokemons">
          <ul>
            {pokemons.map((pokemon) => (
              <li
                key={pokemon.name}
                onClick={() => navigate(`/pokemon/${pokemon.name}`)}
                style={{ cursor: "pointer" }}
              >
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>
                  {pokemon.name} <strong>(#{pokemon.id})</strong>
                </p>
              </li>
            ))}
          </ul>
          <button onClick={() => setOffset(offset + 10)}>Carregar mais</button>
        </div>
      </main>
    </>
  );
}
