import './App.css';
import BoasVindas from './components/BoasVindas/BoasVindas';
import Saudacoes from './components/Saudacoes/Saudacoes';
import Contador from './components/Contador/Contador';
import BotaoConsole from './components/BotaoConsole/BotaoConsole';
import Game from './components/Game/Game';

function App() {
  return (
    <div className="App">
      <BoasVindas />
      <Saudacoes nome="Gabriel"/>
      <Contador />
      <div className='box'></div>
      <BotaoConsole />
      <Game />
    </div>
  );
}

export default App;
