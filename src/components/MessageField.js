import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const MessageField = ({ name, text, setText }) => {
  const [ isEdit, setIsEdit ] = useState(false);  // 日本語の編集中かどうかの判定(状態)を管理(trueは編集中｜falseは編集中ではない)

  return (
    <TextField
      fullWidth={true}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (isEdit) return;  // isEditがtrue(編集中であれば)何も返さない(ここで処理を終了させる。早期return)
        if (e.target.value === '') return;  // チャットの入力エリアが空の場合は早期return
        if (e.key === "Enter") {
          console.log('push message to firebase');
          setText('');
          e.preventDefault();  // Enterキーを押下したときにリクエストが飛んでしまう(標準的な処理)のを防ぐ記述
        }
      }}
      onCompositionStart={(e) => setIsEdit(true)}
      onCompositionEnd={(e) => setIsEdit(false)}
      value={text}  // Textfieldの入力エリアにtext(state)の値を適用させて初期化
    />
  );
}
export default MessageField;