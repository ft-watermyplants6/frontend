import React from 'react'

class LoginForm extends React.Component{
    state ={
        credentials: {
            username: '',
            phoneNumber: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name] : e.target.value
            }
        })
    }

    render() {
        return (
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
                    <button>Log in</button>
              </form>
            </div>
        )
    }
}

export default LoginForm