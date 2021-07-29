import React from 'react'
import {axiosWithAuth} from '../axiosWithAuth';
import styled from 'styled-components';
import axios from 'axios';

class SignupForm extends React.Component {


  state = {
    credentials: {
      username: '',
      password: '',
      phoneNumber: '',
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth().post('/api/auth/register', this.state.credentials)
      .then(res => {
        console.log('res: ', res)
        localStorage.setItem('token', res.data.token);
        this.props.history.push("/addPlant");
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <Container>
      <div>
        <form onSubmit={this.login}>
          <label>Username:
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </label>
          <label>Phone Number:
            <input
              type='tel'
              name='phoneNumber'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              value={this.state.credentials.phoneNumber}
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
          <button>Sign Up</button>
          <h3>Sign Up and Come on in!</h3>
          <p>We'll help remembering to water your plants easy!</p>
          <div>
                        <Image
                            src="https://images.unsplash.com/photo-1577968897411-6973c2e2452a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdXNlJTIwcGxhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="plant"
                        />
                    </div>
        </form>
      </div>
      </Container>

    )
  }
}

export default SignupForm

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