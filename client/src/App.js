import './App.css';
import {Router} from '@reach/router' 
import DisplayApprentice from './components/DisplayApprentice';

function App() {
  return (
    <div className="App">
      <h1>Hello, File Uploader</h1>
      <Router>
        <DisplayApprentice path="/"/>
      </Router>

    </div>
  );
}

export default App;


