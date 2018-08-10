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

/* Signatures for Props and State */
import { ILoginFormProps, ILoginFormState }           from './types';

export default class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {

  constructor(props: any) {
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
    // tslint:disable-next-line:no-console
    console.log('Logging In');
  }

  private register = () => {
    // tslint:disable-next-line:no-console
    console.log('Registering');
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