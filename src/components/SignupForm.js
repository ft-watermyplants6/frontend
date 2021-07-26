import React from 'react'

class SignupForm extends React.Component {

    render() {
        return(
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
            
        )
    }
}

export default SignupForm