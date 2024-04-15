import './App.css';
import { GameIntro } from './components/GameIntro';
import { GuessPassword } from './components/GuessPassword';
import { Hints } from './components/Hints';
import PasswordHintImage from './components/PasswordHintImage';

function App() {
  return (
    <div className="h-screen flex ">
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-128">
          <GameIntro />
          <div className="mb-4" />
          <GuessPassword />
          <div className="mb-12" />
          <Hints />
        </div>
      </div>
      <PasswordHintImage />
    </div>
  );
}

export default App;
