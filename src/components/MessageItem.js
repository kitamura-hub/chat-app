import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';

import MyIcon from '../img/angry_cat.jpg'
import OtherIcon from '../img/kaomoji_icon.png'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({ name, text, isLastItem}) => {
  const ref = useRef();
  const classes = useStyles();
  const iconPath = (name === "cat") ? MyIcon : OtherIcon;

  // isLastItemがtrueのときにスクロール
  useEffect(() => {
    if (isLastItem) ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref} >
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