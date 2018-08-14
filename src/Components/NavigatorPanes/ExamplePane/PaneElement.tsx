import * as React                                     from 'react';

import Device                                         from '../../SettingsMenu/Device';


/* Change the JSX that Represents your Pane here. */
const fakeDevice = 'fakedevice';
const fakeLogout = () => {/* */};

const paneJSX = (
  <div>
    Example of a NavigatorPane that uses Components.
    <br/>
    <br/>
    <Device key={0}  id={fakeDevice} authToken={fakeDevice} lastUsed={'Forever, its fake'} logout={fakeLogout} thisDevice={true} userAgentStr={'Your Browser on your Device'} />
  </div>
);

export default paneJSX;