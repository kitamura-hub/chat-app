import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';

export default () => {
  const [ name, setName ] = useState('');

  // name(ニックネームの入力値)によって返すコンポーネントを制御
  if (name === "") {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
