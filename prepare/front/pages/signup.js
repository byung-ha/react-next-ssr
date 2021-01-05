// base
import React, { useCallback, useState } from 'react';
import Head from 'next/head';

// modules
import { Button, Form, Input } from 'antd';

// components
import AppLayout from "../components/AppLayout"
import useInput from '../hooks/useInput';

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [name, onChangeName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);

  const onChangePasswordConfirm = useCallback((e) => {
    setPasswordConfirm(e.target.value);
    setErrorPassword(e.target.value !== password);
  }, [password]);

  const onSubmit = useCallback(() => {
    if (password !== passwordConfirm) {
      return setErrorPassword(true);
    }

    console.log(id, name, password);
  }, [password, passwordConfirm]);

  return (
    <>
      <Head>
        <title>Nodebird | 회원가입</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input
              name="user-id"
              value={id}
              onChange={onChangeId}
              required
            />
          </div>
          <div>
            <label htmlFor="user-name">닉네임</label>
            <br />
            <Input
              name="user-name"
              value={name}
              onChange={onChangeName}
              required
            />
          </div>
          <div>
            <label htmlFor="user-password">패스워드</label>
            <br />
            <Input
              name="user-password"
              type="password"
              value={password}
              onChange={onChangePassword}
              required  
            />
          </div>
          <div>
            <label htmlFor="user-password-confirm">패스워드</label>
            <br />
            <Input
              name="user-password-confirm"
              type="password"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
              required  
            />
          </div>
          {errorPassword && <div style={{ color: '#ff0000' }}>비밀번호가 일치하지 않습니다.</div>}
          <div>
            <Button type="primary" htmlType="submit">회원가입</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  ) 
};

export default Signup;