import './App.css';
import LoginForm from './components/LoginForm';
import AddPlant from './Schema/AddPlant/AddPlant';
import EditPlant from './Schema/EditPlant/EditPlant';
import Home from './components/Home';
import "../src/"
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function App() {

  // const logout = () => {
  //   window.localStorage.removeItem('token');
  // };

  return (
    <Router>
      <div className='App'>
      <Wrapper>

        <h1>Water My Plants</h1>
        <nav className="home-login-subscribe">
          <Link to='/'>HOME</Link>
          <Link to='/login'>LogIn/Out</Link>
          <a href="index.html">View Plants</a>
          <Link to='/addPlant' id="add-plant">Add a Plant</Link>
          <Link to='/editPlant' id="edit-plant">Edit a Plant</Link>
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
h2{
font-family: 'Chelsea Market', cursive;
font-size: 4rem;
color: black;
padding-left: 2%;
}

a{
text-decoration: none;
background-color: rgb(179, 170, 170);
padding: 1%;
border-radius: 25%;
margin: 0 1%;
&:hover{
    background-color: rgb(11, 223, 57);
    transform:scale(2);
    transition: all 0.5s ease-in-out;
}
transition: all 0.5s ease-in-out;

button{
text-decoration: none;
background-color: rgb(179, 170, 170);
padding: 1%;
border-radius: 25%;
margin: 0 1%;
&:hover{
    background-color: rgb(11, 223, 57);
    transform:scale(2);
    transition: all 0.5s ease-in-out;
}
transition: all 0.5s ease-in-out;


header{
background-color:#444c55;
}
nav{
display:flex;
flex-direction: row;
justify-content:flex-start;
margin: 1%;	
}`

