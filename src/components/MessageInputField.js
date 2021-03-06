import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';
import { icon_setting } from '../icon_setting';

const useStyles = makeStyles({
  root: {
    gridRow: 2,  // MessageInputFieldはGridにおいて、Gridが定める境界線が上から数えて2番目に位置する
    margin: '24px',
  }
});

const MessageInputField = ({ name }) => {
  const inputEl = useRef(null);  // MessageFieldで送信ボタンを押下した後にautofocusするためのオブジェクト
  const [ text, setText ] = useState('');  // チャットの入力文字列を管理
  const classes = useStyles();
  const icon = icon_setting(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={icon}/>
        </Grid>
        <Grid item xs={10}>
          <MessageField name={name} text={text} setText={setText} inputEl={inputEl} />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton name={name} text={text} setText={setText} inputEl={inputEl} />
        </Grid>
      </Grid>
    </div>
  );
}
export default MessageInputField;