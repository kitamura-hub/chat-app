import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MyIcon from '../img/angry_cat.jpg'
import OtherIcon from '../img/kaomoji_icon.png'

const useStyles = makeStyles({
  root: {
    gridRow: 2,  // MessageInputFieldはGridにおいて、Gridが定める境界線が上から数えて2番目に位置する
    margin: '24px',
  }
});

const MessageInputField = ({ name }) => {
  const classes = useStyles();
  const iconPath = (name === "cat") ? MyIcon : OtherIcon;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={iconPath}/>
        </Grid>
        <Grid xs={10}>入力</Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
}
export default MessageInputField;