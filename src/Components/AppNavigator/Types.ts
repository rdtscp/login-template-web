// import { Dispatch }                         from 'redux';
// import * as Models                          from '../../Models';
import { IAppNavigatorStyle }                  from './Styles';

import * as Models                          from '../../Models';


interface IAppNavigatorProps {
  devices: Models.Device[];
}

interface IAppNavigatorState {
  mobileOpen: boolean;
}

type AppNavigatorProps = IAppNavigatorProps & IAppNavigatorStyle;
type AppNavigatorState = IAppNavigatorState;

export { AppNavigatorProps, AppNavigatorState };