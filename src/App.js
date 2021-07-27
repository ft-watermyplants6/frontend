import './App.css';
import LoginForm from './components/LoginForm';
import AddPlant from './Schema/AddPlant/AddPlant';
import EditPlant from './Schema/EditPlant/EditPlant';
import PlantList from './components/PlantList';
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
          <Link className='links' to='/plantList'>View Plants</Link>
          <Link className='links' to='/addPlant' id="add-plant">Add a Plant</Link>
          <Link className='links' to='/editPlant' id="edit-plant">Edit a Plant</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/addPlant' component={AddPlant}/>
          <Route path='/editPlant' component={EditPlant}/>
          <Route path='/plantList' component={PlantList}/>
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
nav{
  display: flex;
  justify-content: center;
}
a{
text-decoration: none;
background-color: rgb(179, 170, 170);
padding: 1%;
border-radius: 25%;
margin: 0 1%;
&:hover{
    background-color: rgb(11, 223, 57);
    transform:scale(1.25);
    transition: all 0.5s ease-in-out; 
}
 transition: all 0.5s ease-in-out;
}
`;