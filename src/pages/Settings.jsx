import React from 'react';
import PropTypes from 'prop-types';
import SettingOptions from '../components/SettingOptions';
import '../styles/pages/Settings.css';
import triviaLogo from '../img/logo.png';

class Settings extends React.Component {
  render() {
    const { history: { push } } = this.props;
    return (
      <>
        <header>
          <img className="all-pages-logo" src={ triviaLogo } alt="logo trivia" />
          <h1 className="pretty-title" data-testid="settings-title">Settings</h1>
        </header>
        <main className="setting-options">
          <SettingOptions push={ push } />
        </main>
      </>
    );
  }
}

Settings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Settings;
