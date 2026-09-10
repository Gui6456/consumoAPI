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

                        <p> Tipo:
                            <span className="tipo">
                                {pokemon.types ? pokemon.types[0].type.name : "" }      
                            </span>
                        </p>

                        <p> Habilidades: 

                            {
                                pokemon.abilities ?
                                pokemon.abilities.map((habilidades) => (
                                    <span className="habilidade">
                                        {habilidades.ability.name}
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
                                    <span key={status.stat.name} className="status-item">
                                        {status.stat.name}: {status.base_stat}
                                    </span>
                                ))
                            :
                                ""
                            }
                    </div>

                        <img src={pokemon.sprites?.versions["generation-v"]["black-white"].animated.front_default} />

                    </li>
                </ul>

            </div>
        );
}

export default Pokedex;