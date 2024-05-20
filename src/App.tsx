
import './App.css'

function App() {

  const luana = {
    cliente: 'LuN',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};


const dados = luana
const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <>
      
      <div>
        <h2>Nome : {dados.cliente}</h2>
        <p>Idade : {dados.idade}</p>
        <p>
          Situação : {' '}
          <span style={{color:dados.ativa ? 'green' : 'red'}}>
            {dados.ativa ? 'ativa ' : 'inativa'}
          </span>
        </p>
      </div>
       <p> Total : {total}</p>
       {total > 10000 && <p>Você está gastando muito</p>}
    </>
  )
}

export default App
