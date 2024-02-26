import './App.css';
import { FactoryContainer } from './containers/FactoryContainer';
import { ModeSwitch } from './components/molecules/ModeSwitch';

function App() {
  return (
    <div>
      <ModeSwitch />
      <FactoryContainer />
    </div>
  );
}

export default App;
