import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import MessageItem from './MessageItem'
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,  // MessageInputFieldはGridにおいて、Gridが定める境界線が上から数えて1番目に位置する
    overflow: 'auto',
    width: '100%'
  }
});

const MessageList = () => {
  const [ messages, setMessages ] = useState([]);  // firebaseから取得するメッセージを管理
  const classes = useStyles();

  useEffect(() => {
    messagesRef
    .orderByKey()  // キー順(時系列順)
    .limitToLast(15)  // 最新のメッセージからx件取得
    .on('value', (snapshot) => {
      const messages = snapshot.val();
      if (messages === null) return;  // messagesの中身がnullの場合は早期return
      const entries =  Object.entries(messages);  // object -> 配列に変換
      const newMessages = entries.map(entry => {
        const [ key, nameAndText ] = entry;
        return { key, ...nameAndText }
      });
      setMessages(newMessages);
  });
  }, []);

  const lengthMsg = messages.length;

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = (lengthMsg === index + 1);  // 最新のメッセージかどうか(配列とindexの長さが同じ=最新のメッセージ)

        return (
          <MessageItem
            key={key}
            name={name}
            text={text}
            isLastItem={isLastItem}
          />
        );
      })}
    </List>
  );
}
export default MessageList;