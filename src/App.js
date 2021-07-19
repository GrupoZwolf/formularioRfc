
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { RouterComponent } from './router/RouterComponent';

function App() {

  return (
    <Router>
      <RouterComponent />
    </Router>
    
  );
}

export default App;
