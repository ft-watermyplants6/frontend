import React from 'react'
import {axiosWithAuth} from '../axiosWithAuth';

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
    axiosWithAuth().post('/api/auth/register',this.state.credentials)
      .then(res => {
        console.log('res: ', res)
        localStorage.setItem('token', res.data.token);
        this.props.history.push("/protected");
      })
      .catch(err => {
        console.log(err);
      })
    }

    render() {
        return(
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
              </form>
            </div>
            
        )
    }
}

export default SignupForm