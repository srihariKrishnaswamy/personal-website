import logo from './logo.svg';
import './App.css';
import Mainsection from "./components/mainsection/Mainsection";
import Navsection from "./components/navsection/Navsection";
function App() {
  return (
    <div className="App">
      <Navsection/>
      <Mainsection/>
    </div>
  );
}

export default App;