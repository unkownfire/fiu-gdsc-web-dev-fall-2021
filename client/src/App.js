import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-icon-button/dist/icon-button.css';
import {Route} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import RecipeCard from './components/RecipeCard'
import CardGrid from './components/CardGrid/CardGrid'
function App() {
  return (
    <div className="App">

       {/* The Router is used to create different links for each class */}
      <Route exact path="/" component={Home}/>
      <Route exact path="/Dashboard" component={Dashboard}/>



    </div>
  )
}

export default App;
