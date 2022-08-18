import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import loginPageImg from "../img/login-page-no-bg.png";
import "./styles/LoginPage.css";

const LoginPage = (props) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [createLoginError, setCreateLoginError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUsernameChange = (event) => {
    setLoginError(false);
    setLoginUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setLoginError(false);
    setLoginPassword(event.target.value);
  };

  const handleNewUsername = (event) => {
    setCreateLoginError(false);
    setNewUsername(event.target.value);
  };

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:3045/auth", {
        login_username: loginUsername
      })
      .then((res) => {
        console.log(res.data.login_password, loginPassword);
        if (res.data.login_password === loginPassword) {
          const item = {
            value: res.data.user_id,
            expiry: new Date().getTime() + 1800000
          };

          window.localStorage.setItem("session", JSON.stringify(item));
          props.onLogin(res.data.user_id);
        } else {
          setLoginError(true);
        }
      })
      .catch(() => {
        setLoginError(true);
      });
  };

  const handleCreateAccount = () => {
    axios
      .post("http://localhost:3045/user/create", {
        newUsername: newUsername,
        newPassword: newPassword
      })
      .then((res) => {
        const item = {
          value: res.data.user_id,
          expiry: new Date().getTime() + 600000
        };

        window.localStorage.setItem("session", JSON.stringify(item));
        props.onLogin(res.data.user_id);
      })
      .catch(() => {
        setCreateLoginError(true);
      });
  };

  return (
    <div className="login-page-container">
      <div className="login-page">
        <div className="login-title-container text-white">
          <h1 className="login-title">Finessflix</h1>
          <p className="login-text">All your streaming accounts, all in one place.</p>
        </div>
        <img
          src={loginPageImg}
          alt="login-page-img"
          className="login-page-img"
        />
        <div className="login-form">
          <Form.Group className="login-fields">
            <Form.Control
              value={loginUsername}
              placeholder="Username"
              onChange={handleUsernameChange}
              isInvalid={loginError}
            />
            <Form.Control
              value={loginPassword}
              placeholder="Password"
              onChange={handlePasswordChange}
              isInvalid={loginError}
            />
            <Form.Control.Feedback type="invalid">
              Username or password is incorrect.
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="login-btn" onClick={handleLogin} variant="primary">
            Log In
          </Button>
          <hr />
          <Form.Text className="sign-up-text text-white">
            Don't have an account?
          </Form.Text>
          <Button
            className="sign-up-btn"
            onClick={handleShow}
            variant="success"
          >
            Sign Up
          </Button>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Control
                  className="signup-field"
                  placeholder="New Username"
                  value={newUsername}
                  onChange={handleNewUsername}
                  isInvalid={createLoginError}
                />
                <Form.Control.Feedback type="invalid">
                  Username has already been taken
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Control
                className="signup-field"
                placeholder="New Password"
                value={newPassword}
                onChange={handleNewPassword}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCreateAccount}>
                Create Account
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
