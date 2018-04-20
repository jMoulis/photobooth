/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Input from '../form/input';
import Button from '../form/button';
import ShowPassword from '../form/showPassword';
import ErrorDisplay from '../global/errorDisplay';

/**
 * Code
 */
class Login extends React.Component {
  state = {
    form: {
      username: '',
      password: '',
    },
    showPassword: false,
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    const { loginAction } = this.props;
    // Pass the form
    loginAction(evt.target);
  }
  handleInputChange = (evt) => {
    // Set the value of the active input into
    // the state
    const { name, value } = evt.target;
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value,
      }
    }));
  }
  handleShowPassword = (evt) => {
    evt.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }))
  }
  render() {
    const { login } = this.props;
    const { error, logging } = login;
    return (
      <section id="login"  className="col d-flex flex-column align-items-center justify-content-center">
        {error !== null ? <ErrorDisplay value={error} /> : ''}
        <header>
          <h1>Roger Dubuis</h1>
        </header>
        <form onSubmit={this.handleSubmit} id="login-form">
          <Input
            type="text"
            nameField="username"
            value={this.state.login}
            onChange={this.handleInputChange}
            label="Login" autocomplete="off"
          />
          <div id="password-container">
            <Input
              type={this.state.showPassword ? 'text' : 'password'}
              nameField="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              label="Password"
              autocomplete="on"
            />
            <ShowPassword onClick={this.handleShowPassword} />
          </div>
          {/**
            disabled: check if the login state is logging and set the button to disabled
            spinner: if true, will show a spinner in logging state instead of the button text
          */}
          <Button
            nameBtn="Sign in"
            type="submit"
            name="signin"
            disabled={logging && true}
            spinner={true}
          />
        </form>
      </section>
    )
  }
}

export default Login;
