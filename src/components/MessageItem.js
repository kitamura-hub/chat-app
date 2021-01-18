import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';

import MyIcon from '../img/angry_cat.jpg'
import OtherIcon from '../img/kaomoji_icon.png'

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({ name, text }) => {
  const classes = useStyles();
  const iconPath = (name === "cat") ? MyIcon : OtherIcon;

  return (
    <ListItem divider={true} >
      <ListItemAvatar>
        <Avatar src={iconPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
          {text}
          </Typography>
        }
      />
    </ListItem>
  );
}
export default MessageItem;