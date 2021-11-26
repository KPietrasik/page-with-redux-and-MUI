import React from "react";

import { Button, Container, Box} from "@mui/material";
import { Input } from "@mui/material";
import { InputLabel } from "@mui/material";

import { userLogged } from "../actions";
import { connect } from "react-redux";

const goodCreditensials = {
  goodLogin: "Paweł",
  goodPassword: "Hasło",
};

class LoginForm extends React.Component {
  state = {
    loginValue: "",
    passwordValue: "",
    error: false,
  };

  handleLoginChange = (e) => {this.setState({ loginValue: e.target.value });};

  handlePasswordChange = (e) => {this.setState({ passwordValue: e.target.value });};

  handleSubmit = (e) => {
    e.preventDefault()

    const {loginValue, passwordValue} = this.state;

    if (loginValue === goodCreditensials.goodLogin 
        && 
        passwordValue === goodCreditensials.goodPassword) {
            console.warn("zalogowano i wysylam akcje");
            this.props.userLogged(loginValue);
    } else {
    this.setState({ error: !this.state.error });
    }

 
  };

  render() {
    return (
      <Container className="loginContainer" maxWidth="xs">
        <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
          <InputLabel>
            {"Podaj Imię: "}
            <Input
              type="text"
              value={this.state.loginValue}
              name="login"
              onChange={this.handleLoginChange}
            ></Input>
          </InputLabel>

          <InputLabel>
            {"Podaj Hasło: "}
            <Input
              type="password"
              value={this.state.passwordValue}
              name="password"
              onChange={this.handlePasswordChange}
            ></Input>
          </InputLabel>
          <Button variant="outlined" type="submit" >
            Zaloguj
          </Button>
        </Box>
        {this.state.error ? <p>Podano błędne dane logowania</p> : null}
      </Container>
    );
  }
}

// ta funkcja dostaje stan ze stora
const mapStateToProps = (state) => {
    console.warn("loginForm: wykryłem zmiany w state")
  return {}
};


const mapDispatchToProps = {userLogged};

// const connectLoginForm = connect(mapStateToProps, mapDispatchToProps);
// export const LoginFromConnected = connectLoginForm(LoginForm);

export const LoginFormConnected = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
