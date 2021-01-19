import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CssBaseline, TextField, Link, Box, Typography, Container }
from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://twitter.com/masa99_it"
        target="_blank"
        rel="noopener"
      >
        Masato Kitamura
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ setName }) {
  const classes = useStyles();
  const [ disabled, setDisabled ] = useState(true);  //はじめるボタンの開閉状態を管理(trueは閉｜falseは開)
  const [ string, setString ] = useState('');  //ニックネームの入力値を管理
  const [ isEdit, setIsEdit ] = useState(false);// 日本語の編集中かどうかの判定(状態)を管理(trueは編集中｜falseは編集中ではない)

  // string(入力値)を監視して、変化がある度に中の処理を実行
  useEffect(() => {
    const isDisabled = string === '';
    setDisabled(isDisabled);
  }, [string]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネーム"
            name="name"
            autoFocus
            onChange={(e) => setString(e.target.value)}
            onKeyDown={(e) => {
              if (isEdit) return;  // isEditがtrue(編集中であれば)は早期return
              if (e.key === "Enter") {
                e.preventDefault();  // Enterキーを押下したときにリクエストが飛んでしまう(標準的な処理)のを防ぐ記述
                setName(e.target.value);  // 引数はstring(state)でも可
              }
            }}
            // 日本語の変換処理がスタートしたときに発火
            onCompositionStart={(e) => setIsEdit(true)}
            // 日本語入力の変換が確定したときに発火
            onCompositionEnd={(e) => setIsEdit(false)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disabled}
            onClick={() => setName(string)}
          >
            はじめる
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}