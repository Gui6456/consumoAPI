import { useState } from "react";
import "./pokedex.css";

function Pokedex() {

    const [research, setResearch] = useState("")
    const [pokemon, setPokemon] = useState({})

    async function research_name (name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        setPokemon(data)
    }

        return ( 
            <div>

                <h1>Pokédex</h1>
                <p>Consulte um Pokémon</p>

                <input onChange={ e => setResearch(e.target.value)} placeholder="Digite um Pokémon..." />
                <button onClick={()=> research_name(research)} > 🔎 Pesquisar </button>

                <hr/>

                <ul>
                    <li>

                        <h2>Nome: {pokemon.name}</h2>

                    {/* O index serve como um contador, começa do 0 e procede, nesse caso ele é necessário para ver as posições, sendo o type 0(1) e o type 1(2) */}
                        <p> Tipo: {/* i = item */}
                            {pokemon.types?.map((i, index) => (
                                <span className="tipo">  
                                    {index > 0 && " and "}
                                    {i.type.name}{" "}     
                                </span>
                            ))}
                        </p>

                        <p> Habilidades: 

                            {
                                pokemon.abilities ?
                                pokemon.abilities.map((habilidades, index) => (
                                    <span className="habilidade">
                                        {index > 0 && " and "}
                                        {habilidades.ability.name}{" "} 
                                        <br/>
                                    </span>
                                ))
                            :    
                                ""
                            }

                        </p>
                    <div className="status">
                        <p> Status base: </p>

                            {
                                pokemon.stats ?
                                pokemon.stats.map((status) => (
                                    <span className="status-item">
                                        {status.stat.name}: {status.base_stat}
                                    </span>
                                ))
                            :
                                ""
                            }
                    </div>

                        <img src={pokemon?.sprites?.versions["generation-v"]["black-white"].animated.front_default} />

                    </li>
                </ul>

            </div>
        );
}

export default Pokedex;