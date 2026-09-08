import { useState } from "react";
import "./app.css"

function App() {
    // Métodos de API
    // - Get: busca, os dados ficam expostos
    // - Post: inserção, os dados são ocultos
    // - Update
    // - Patch     Os demais não vão ser vistos no curso
    // - Option
    // - Delete

    const [users, setUsers] = useState([])

    async function search_all() {
        // var e let são iguais, ambas podem ser alteradas, porém var é global e let é de um escopo, agora o const é INALTERÁVEL

        const response = await fetch("https://dummyjson.com/user")
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


    return (
        <div>

            <h1>Consumo de API</h1>
            <p>Buscando dados da API DummyJSON</p>
            <button onClick={search_all}>Carregar dados</button>

            <ul>
                {
                    users.length == 0 ?
                        <p>Lista vazia...</p>
                    :
                        users.map(
                            i => <li> <img src={`https://ui-avatars.com{i.firstName}+${i.lastName}`} />
                            Sr(a) {i.firstName} tem {i.age} anos.
                            <button onClick={() => show_info(i)} > Ver informações </button> </li>
                        )    
                }          
            </ul>

        </div>
    );
}

export default App;