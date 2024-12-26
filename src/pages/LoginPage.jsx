import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
// Importing icons from assets
import githubIcon from "../assets/github-icon.png";
import bitbucketIcon from "../assets/bitbucket-icon.png";
import azureIcon from "../assets/azure-icon.png";
import gitlabIcon from "../assets/gitlab-icon.png";
import gitlabSelfHostedIcon from "../assets/gitlab-icon.png"; // Self-hosted GitLab
import ssoIcon from "../assets/key-icon.png"; // SSO key icon

const LoginPage = () => {
  const [isSaas, setIsSaas] = useState(true); // Default to SAAS login
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSaasClick = () => setIsSaas(true);
  const handleSelfHostedClick = () => setIsSaas(false);

  // Function to navigate to the Repositories Page after login
  const handleSignIn = () => {
    navigate("/repositories"); // Redirect to Repositories page after login
  };

  return (
    <div className="login-container">
      {/* Left Half */}
      <div className="left-half">
        <img
          src={require("../assets/sidebar_navigation.png")}
          alt="Static Background"
          className="background-image"
        />
      </div>

      {/* Right Half */}
      <div className="right-half">
        <h1 className="login-heading">CodeAnt AI</h1>
        <p className="welcome-note">Welcome to CodeAnt AI</p>

        {/* Tabs for SAAS and Self Hosted */}
        <div className="login-tabs">
          <button
            className={`tab-button ${isSaas ? "active" : ""}`}
            onClick={handleSaasClick}
          >
            SAAS
          </button>
          <button
            className={`tab-button ${!isSaas ? "active" : ""}`}
            onClick={handleSelfHostedClick}
          >
            Self Hosted
          </button>
        </div>

        {/* Login Options */}
        <div className="login-options">
          {isSaas ? (
            <>
              <button className="login-option" onClick={handleSignIn}>
                <img src={githubIcon} alt="GitHub" className="icon" /> Sign in with GitHub
              </button>
              <button className="login-option" onClick={handleSignIn}>
                <img src={bitbucketIcon} alt="Bitbucket" className="icon" /> Sign in with Bitbucket
              </button>
              <button className="login-option" onClick={handleSignIn}>
                <img src={azureIcon} alt="Azure" className="icon" /> Sign in with Azure DevOps
              </button>
              <button className="login-option" onClick={handleSignIn}>
                <img src={gitlabIcon} alt="GitLab" className="icon" /> Sign in with GitLab
              </button>
            </>
          ) : (
            <>
              <button className="login-option" onClick={handleSignIn}>
                <img src={gitlabSelfHostedIcon} alt="GitLab" className="icon" /> Self Hosted GitLab
              </button>
              <button className="login-option" onClick={handleSignIn}>
                <img src={ssoIcon} alt="SSO" className="icon" /> Sign in with SSO
              </button>
            </>
          )}
        </div>

        <p className="privacy-policy">
          By signing up you agree to the <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
