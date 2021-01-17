import React, { useState } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';

import MyIcon from '../img/angry_cat.jpg'
import OtherIcon from '../img/kaomoji_icon.png'

const useStyles = makeStyles({
  root: {
    gridRow: 2,  // MessageInputFieldはGridにおいて、Gridが定める境界線が上から数えて2番目に位置する
    margin: '24px',
  }
});

const MessageInputField = ({ name }) => {
  const [ text, setText ] = useState('');  // チャットの入力文字列を管理
  const classes = useStyles();
  const iconPath = (name === "cat") ? MyIcon : OtherIcon;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={iconPath}/>
        </Grid>
        <Grid item xs={10}>
          <MessageField name={name} text={text} setText={setText} />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton name={name} text={text} setText={setText} />
        </Grid>
      </Grid>
    </div>
  );
}
export default MessageInputField;