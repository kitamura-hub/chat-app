import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    gridRow: 1,  // MessageInputFieldはGridにおいて、Gridが定める境界線が上から数えて1番目に位置する
  }
});

const MessageList = () => {
  const classes = useStyles();
  return <div className={classes.root}>MessageList</div>;
}
export default MessageList;