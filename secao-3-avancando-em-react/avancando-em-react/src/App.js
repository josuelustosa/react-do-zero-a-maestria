import './App.css';

import City from './assets/city.jpg';

function App() {
  return (
    <div>
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem com pôr do Sol" />
      </div>

      {/* Imagem em src */}
      <div>
        <img src={City} alt="Cidade a noite" />
      </div>

    </div>
  );
}

export default App;
