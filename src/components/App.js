import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json';

export default () => {
  const [ name, setName ] = useState('');

  // ルーティング制御
  if (config.signInEnabled && name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
