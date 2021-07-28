import React from 'react'
import axios from 'axios';
import styled from 'styled-components';

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
    axios.post('', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.username);
        this.props.history.push("/protected");
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <Container>
      <div>
        <form>
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
        </form>
      </div>
      </Container>

    )
  }
}

export default SignupForm

// const Image = styled.img`
// border: 1px solid black;
// margin: 3% ;
// height: 60vh; `


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