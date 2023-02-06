import './App.css';
import LoginUseReducer from './components/LoginUseReducer';
import LoginUseState from './components/LoginUseState';
//import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <LoginUseState></LoginUseState>
      <LoginUseReducer></LoginUseReducer>
    </div>
  );
}

export default App;
