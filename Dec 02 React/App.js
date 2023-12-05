import './App.css';
import {Route} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Home from './Components/Home';
import LinkPage from './Components/linkpage';
function App() {
  return (
    <div>
       <div>
            <LinkPage/>
      </div>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/login" component={Login}/>
    </div>
  );
}
export default App;
