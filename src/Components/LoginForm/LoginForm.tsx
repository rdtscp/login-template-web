import * as React from 'react';

/* Component Imports */
import Button                                         from '@material-ui/core/Button';
import FormControl                                    from '@material-ui/core/FormControl';
import IconButton                                     from '@material-ui/core/IconButton';
import Input                                          from '@material-ui/core/Input';
import InputAdornment                                 from '@material-ui/core/InputAdornment';
import InputLabel                                     from '@material-ui/core/InputLabel';
import Visibility                                     from '@material-ui/icons/Visibility';
import VisibilityOff                                  from '@material-ui/icons/VisibilityOff';

/* Type Imports */
import { IBackendData, ILoginContent }                from './Container';
import { LoginFormProps, LoginFormState }             from './Types';

/* Import Functionality */
import {
  sendLoginRequest,
  sendRegisterRequest
}                                                     from './Container';

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {

  constructor(props: LoginFormProps) {
    super(props);
    this.state = {
      password:       '', 
      showPassword:   false,
      username:       '',
    }
  }

  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.loginContainer}>
        <div className={classes.formContainer}>
          <form style={{width: 223}}>
            <FormControl>
              <InputLabel htmlFor="login-username">Username</InputLabel>
              <Input
                name="username"
                id="login-username"
                value={this.state.username}
                onChange={this.handleChange}
                autoComplete="username"
                onKeyDown={this.handleKeyDown}
                style={{width: 223}}
              />
            </FormControl>
            <FormControl style={{marginTop: 5}}>
              <InputLabel htmlFor="login-password">Password</InputLabel>
              <Input
                name="password"
                id="login-password"
                value={this.state.password}
                onChange={this.handleChange}
                autoComplete="password"
                onKeyDown={this.handleKeyDown}

                type={this.state.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className={classes.buttonsContainer}>
              <Button onClick={this.login} variant="contained" color="primary" className={classes.buttonsStyle}>
                Login
              </Button>
              <Button onClick={this.register} variant="contained" color="primary"  className={classes.buttonsStyle}>
                Register
              </Button>
            </div>
            
          </form>
        </div>
      </div>
    );
  }

  private login = () => {
    sendLoginRequest({
      password: this.state.password,
      username: this.state.username,
    }, (result: IBackendData) => {
      const { error, warning, message } = result;
      const content: ILoginContent      = result.content;
      // tslint:disable-next-line:no-console
      console.log(result);
      if (error) {
        alert('Error: ' + message);
      }
      else if (warning) {
        alert('Warning: ' + message);
      }
      else if (message !== null) {
        alert('Info: ' + message);
      } 

      if (content !== null) {
        // tslint:disable-next-line:no-console
        console.log('setAuthState');
        // tslint:disable-next-line:no-console
        console.log(content);
        this.props.setAuthState(content.authStatus, content.authToken);
      }
      
    });
  }

  private register = () => {
    sendRegisterRequest({
      password: this.state.password,
      username: this.state.username,
    }, (result: IBackendData) => {
      const { error, warning, message } = result;
      if (error) {
        alert('Error: ' + message);
      }
      else if (warning) {
        alert('Warning: ' + message);
      }
      else if (message !== null) {
        alert(message);
      }
    });
  }

  private handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      this.login();
    }
  }

  private handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  private handleClickShowPassword = () => {
    this.setState( (state: any) => ({ showPassword: !state.showPassword }));
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

}

export default LoginForm;