import {BsSearch} from "react-icons/bs"

const Search = () => {
  return (
    <div>
        <h2>Busque por um usuàrio? : </h2>
        <p>Conheça os melhores repositórios </p>
        <div>
            <input type="text" placeholder='Digite o nome do usuario'/>
            <button>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}

export default Search