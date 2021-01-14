import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    gridRow: 2,  // MessageInputFieldはGridにおいて、Gridが定める境界線が上から数えて2番目に位置する
  }
});

const MessageInputField = () => {
  const classes = useStyles();
  return <div className={classes.root}>MessageInputField</div>;
}
export default MessageInputField;