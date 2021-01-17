import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ name, text, setText, inputEl }) => {
  return (
    <IconButton
      disabled={text === ''}
      onClick={() => {
        pushMessage({ name: 'cat', text });
        setText('');
        inputEl.current.focus();  // autofocusにする処理
      }}
    >
      <SendIcon />
    </IconButton>
  );
}
export default MessageSubmitButton;