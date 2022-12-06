import { useStore } from './store/store';
import Button from './components/Button';
import Reload from './assets/Reload.svg';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [name] = useStore('name');

  return (
    <div className="main-container">
      <h1 className="title">
        <span className="lilush">Lilush</span> State Manager
      </h1>
      <button onClick={() => location.reload()} className="button reload">
        Reload Page <img src={Reload} alt="reload" />
      </button>
      <div className="secondary-container">
        <p className="increment-age">Increment {name}'s Age:</p>
        <div>
          <Button />
          <Button />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
