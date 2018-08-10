interface ILoginFormProps {
  loginAction:              (loginData: any) => ((dispatch: any) => void);
  // registerAction:     (registerData: any) => ((dispatch: any) => void);
}

interface ILoginFormState {
  password:                 string;
  showPassword:             boolean;
  username:                 string;
}

export { ILoginFormProps, ILoginFormState }