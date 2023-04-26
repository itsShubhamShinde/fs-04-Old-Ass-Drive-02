import './App.css';
import Experience from './component/Experience';
import Header from './component/Header';
import Hobbies from './component/Hobbies';
import Skill from './component/Skill';

function App() {
  return (
    <div className="App">
      <Header/>
      <Experience/>
      <Skill/>
      <Hobbies/>
    </div>
  );
}

export default App;