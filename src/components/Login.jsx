import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getTokenApi from '../services/getTokenApi';
import { getUserData } from '../actions';
import '../Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const { userName, email } = this.state;
        if (userName && email) {
          this.setState({
            disabled: false,
          });
        } else {
          this.setState({
            disabled: true,
          });
        }
      },
    );
  }

  // Lógica do click

  async handleClick() {
    const { userName, email } = this.state;
    const { sendUserData } = this.props;
    const response = await getTokenApi();
    const { token } = response;
    localStorage.setItem('token', token);
    sendUserData(userName, email, token);
    const { history } = this.props;
    history.push('/game');
  }

  render() {
    const { userName, email, disabled } = this.state;

    return (
      <div className="login-root">
        <img
          src="assets/logo.png"
          className="login-logo"
          alt="logo trivia star"
        />
        <form className="login-form">
          <label className="login-label" htmlFor="name">
            NAME:
            <input
              className="login-input"
              type="text"
              id="name"
              name="userName"
              value={userName}
              data-testid="input-player-name"
              onChange={this.handleChange}
            />
          </label>
          <label className="login-label" htmlFor="email">
            EMAIL:
            <input
              className="login-input"
              type="text"
              id="email"
              name="email"
              value={email}
              data-testid="input-gravatar-email"
              onChange={this.handleChange}
            />
          </label>
          <button
            className="login-button"
            type="button"
            data-testid="btn-play"
            disabled={disabled}
            onClick={() => this.handleClick()}
          >
            PLAY
          </button>
        </form>
        <footer className="login-footer">
          <Link
            className="login-footer-link"
            data-testid="btn-settings"
            to="/settings"
          >
            SETTINGS
          </Link>
        </footer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendUserData: (name, email, token) =>
    dispatch(getUserData(name, email, token)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.func).isRequired,
  sendUserData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
