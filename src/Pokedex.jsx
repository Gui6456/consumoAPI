import { useState } from "react";

function Pokedex() {

    const [research, setResearch] = useState("")
    const [pokemon, setPokemon] = useState({})

    async function research_name (name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        console.log(data)
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
                                  {
                                        pokemon.types ?
                                        pokemon.types[0].type.name 
                                  : 
                                        ""  
                                  }
                        </p>

                        <img {pokemon} src={"https://placehold.co/200"} />

                    </li>
                </ul>

            </div>
        );
}

export default Pokedex;