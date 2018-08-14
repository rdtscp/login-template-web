/* ReactJS */
import axios                                          from 'axios';
import * as React                                     from 'react';
import * as ReactDOM                                  from 'react-dom';
import registerServiceWorker                          from './registerServiceWorker';


/* Components/Redux */
import { Provider }                                   from 'react-redux';
import App                                            from './App';
import store                                          from './State/Store';

/* Styles */
import './styles.css';

axios.get('https://login-template-core.herokuapp.com/device/create');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
