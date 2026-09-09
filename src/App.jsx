import { useEffect, useState } from "react";
import "./app.css"

function App() {
    // Métodos de API
    // - Get: busca, os dados ficam expostos
    // - Post: inserção, os dados são ocultos
    // - Update
    // - Patch     Os demais não vão ser vistos no curso
    // - Option
    // - Delete

    const [users, setUsers] = useState([]) // Tipo array (vazio)
    const [research, setResearch] = useState("")  // Tipo string (vazio)

    
    async function search_all() {
        // var e let são iguais, ambas podem ser alteradas, porém var é global e let é de um escopo, agora o const é INALTERÁVEL

        const response = await fetch("https://dummyjson.com/user")
        const data = await response.json()
        console.log(data)
        setUsers(data.users)
    }

    async function research_name (name) {
        const response = await fetch(`https://dummyjson.com/users/search?q=${name}`)
        const data = await response.json()
        console.log(data)
        setUsers(data.users)
    }

    function show_info (user) {
        alert(`Telefone: ${user.phone} 
               Email: ${user.email}
               Mora em: ${user.address.city}
             `)  
    }
    
    function gender (users) {
        return (users.gender == "male" ? "Sr" : "Sr(a)") 
    }

    // É uma função que monitora o que eu pedir, essa é sua estrutura base 
    useEffect( ()=>{
        search_all()  // Quando o site é carregado pela primeira vez, essa função acontece(os nomes aparecem)
    },[] )  

    return (
        <div>

            <h1>Consumo de API</h1>
            <p>Buscando dados da API DummyJSON</p>

            <hr/>
            <input onChange={ e => setResearch(e.target.value)} placeholder="Digite um nome..." />
            <button onClick={ ()=> research_name(research) } > 🔎 Pesquisar </button>

            <ul>
                {
                    users.length == 0 ?
                        <p></p>
                    : 
                        users.map(
                            i => (
                            <li> 
                                <img class="imagem_iniciais" src={`https://api.dicebear.com/10.x/initials/svg?seed=${i.firstName}&backgroundColor=ffd9b0,ffa8bf&backgroundColorFill=linear&backgroundColorAngle=135` } alt="Avatar" />
                                {gender(i)} {i.firstName} tem {i.age} anos.
                                <button onClick={() => show_info(i)} > Ver informações </button>
                            </li>
                            )
                        )    
                }          
            </ul>
        </div>
    );
}

export default App;