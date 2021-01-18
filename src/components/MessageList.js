import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,  // MessageInputFieldはGridにおいて、Gridが定める境界線が上から数えて1番目に位置する
  }
});

const MessageList = () => {
  const [ messages, setMessages ] = useState([]);  // firebaseから取得するメッセージを管理
  const classes = useStyles();

  useEffect(() => {
    messagesRef
    .orderByKey()  // キー順(時系列順)
    .limitToLast(3)  // 最新のメッセージからx件取得
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
  return <div className={classes.root}>MessageList</div>;
}
export default MessageList;