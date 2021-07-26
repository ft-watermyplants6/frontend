import './App.css';
import LoginForm from './components/LoginForm';
import AddPlant from './Schema/AddPlant/AddPlant';
import "../src/"
import styled from 'styled-components';


function App() {
  return (
    <div>
      <Wrapper>

        <h1>Water My Plants</h1>
        <nav className="home-login-subscribe">
          <a href="index.html">HOME</a>
          <a href="index.html">LogIn/Out</a>
          <a href="index.html">Subscribe</a>
          <a href="indexthtml" id="add-plant">Add a Plant</a>
          <a href="index.html" id="edit-plant">Edit a Plan</a>
        </nav>
        <LoginForm />
        <AddPlant />
      </Wrapper>


    </div>
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

