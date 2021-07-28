import React, { useState } from 'react'
import styled from 'styled-components';
import axios  from 'axios';

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }
  constructor(props){
    super(props)
    this.setToggle = props.setToggle
    console.log('this.setToggle', this.setToggle)
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axios.post('https://wmp-api.herokuapp.com/api/auth/login', this.state.credentials)
      .then(res => {
        console.log('res: ', res)
        localStorage.setItem('token', res.data.token);
        this.setToggle()
      })
      .catch(err=>{
        console.log(err);
      })
    }

    onClick = () => {
      this.props.history.push('/signUp')
    }

  render() {
    return (
      <Container>
        
        <div>
          <form id="form" onClick={this.login}>
            
           
            <label>Username:
              <input
                type='text'
                name='username'
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
            </label>
           
            
           
            <label>Password:
              <input
                type='password'
                name='password'
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            </label>
        
            
          
            <button>Log in</button>
            <button onClick={this.onClick}>Sign up</button>
            
          </form>
        </div>
        <div>
          <Image src="https://images.unsplash.com/photo-1524492449090-a4e289316d9c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000" alt="plant" />
        </div>
      </Container>
    )
  }
}

export default LoginForm

const Image = styled.img`
border: 1px solid black;
margin: 3% ;
height: 60vh; `


const Container = styled.div`
form{
  margin: 1%;
  display: flex;
  flex-direction: column;
	justify-content: space-space-between;
	align-items: center; 

}
label{
  margin: 1%;


}
button{

}
`;
