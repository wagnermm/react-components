import './App.css';

const cars = [
  {modelo: 'Cruze', ano: 2017, cor: 'Branco', preco: 89.000},
  {modelo: 'Toro', ano: 2021, cor: 'Marrom', preco: 99.000},
  {modelo: 'Onix', ano: 2022, cor: 'Branco', preco: 68.000},
  {modelo: 'T-Cross', ano: 2020, cor: 'Branco', preco: 99.000}
]

const listCars = cars.map(
  (c,i)=>
  <li key={i}> {c.modelo} - {c.ano} - {c.cor} - R$ {c.preco}.000</li>
)

function App() {
  return (
    <div className="App">
      <div className="featured">
        <h1>Carros Seminovos</h1>
        <p>{listCars}</p>
      </div>
    </div>
  );
}

export default App;
