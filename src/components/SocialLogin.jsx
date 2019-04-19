/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { getIsAuthenticated } from '../selectors/authSelector';
import socialLogin from '../actions/socialAction';
import SocialButton from '../views/common/SocialButton';
import { getUrlQuery } from '../utils/helpers';

// Social Icons
import facebookIcon from '../images/icons/facebook.svg';
import googleIcon from '../images/icons/google.svg';
// import twitterIcon from '../images/icons/twitter.svg';

/**
 * CLass representing Social Login (OAuth) Components
 *
 * @class SocialLogin
 * @extends {Component}
 */
export class SocialLogin extends Component {
  static propTypes = {
    isAuthenticated: PropType.bool.isRequired,
    handleLogin: PropType.func.isRequired,
  }

  /**
   * Called immediately before mounting occurs
   *
   * @returns {void}
   * @memberof SocialLogin
   */
  componentWillMount() {
    const { handleLogin } = this.props;
    const token = getUrlQuery('token');
    if (token) {
      handleLogin(token);
    }
  }

  /**
   * Navigate to the given provider url
   *
   * @param {string} url - The provider url
   * @returns {void}
   * @memberof SocialLogin
   */
  provider(url) {
    return window.location.assign(url);
  }

  /**
   * React render function
   *
   * @returns {JSX.Element} - DOM element
   * @memberof SocialLogin
   */
  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) { // redirect the user if authenticated
      return <Redirect to="/" />;
    }

    return (
      <div className="row login__socials__content">
        <div className="login__socials__icons">
          <SocialButton
            icon={facebookIcon}
            onClick={() => this.provider(process.env.FACEBOOK_AUTH_URL)}
          />
          <SocialButton
            icon={googleIcon}
            onClick={() => this.provider(process.env.GOOGLE_AUTH_URL)}
          />
          {/**
            * TODO: Requires more stress testing
            *
            <SocialButton
              icon={twitterIcon}
              onClick={() => location.assign(process.env.TWITTER_AUTH_URL)}
            />
          */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: getIsAuthenticated,
});

const mapDispatchToProps = {
  handleLogin: payload => socialLogin(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialLogin);
