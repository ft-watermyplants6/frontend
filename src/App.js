import './App.css';
import LoginForm from './components/LoginForm';
import AddPlant from './Schema/AddPlant/AddPlant';
import EditPlant from './Schema/EditPlant/EditPlant';
import Home from './components/Home';
import "../src/"
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='App'>
      <Wrapper>

        <h1>Water My Plants</h1>
        <nav className="home-login-subscribe">
          <Link className='links' to='/'>HOME</Link>
          <Link className='links' to='/login'>LogIn/Out</Link>
          <a className='links' href="index.html">View Plants</a>
          <Link className='links' to='/addPlant' id="add-plant">Add a Plant</Link>
          <Link className='links' to='/editPlant' id="edit-plant">Edit a Plant</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/addPlant' component={AddPlant}/>
          <Route path='/editPlant' component={EditPlant}/>
        </Switch>
        {/* <AddPlant /> */}
      </Wrapper>

      </div>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
h1{
    font-family: 'Chelsea Market', cursive;
    font-size: 2rem;
    color: black;
    padding-left: 2%;
    margin-bottom: 2%;
    
}

.links{
text-decoration: none;
background-color: rgb(179, 170, 170);
padding: 1%;
border-radius: 25%;
margin: 0 1%;
&:hover{
    background-color: rgb(11, 223, 57);
    transform:scale(3);
    transition: all 0.5s ease-in-out;
}
transition: all 0.5s ease-in-out;
}
`;

