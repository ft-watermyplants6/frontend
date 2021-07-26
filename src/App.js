import './App.css';
import LoginForm from './components/LoginForm';
import AddPlant from './Schema/AddPlant/AddPlant';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <AddPlant>

      </AddPlant>
      <nav className="home-login-subscribe">
                    <a href="index.html">HOME</a>
                    <a href="index.html">LogIn/Out</a>
                    <a href="index.html">Subscribe</a>
                    <a href="indexthtml" id="add-plant">Add a Plant</a>
                    <a href="index.html" id="edit-plant">Edit a Plan</a>
                </nav>

      <h1>Water My Plants</h1>
      <LoginForm/>
    </div>
  );
}

export default App;
