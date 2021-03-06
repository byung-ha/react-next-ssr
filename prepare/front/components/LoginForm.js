// base
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// modules
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const StyledForm = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <StyledForm onFinish={onSubmitForm}>
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
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </StyledForm>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func,
};

export default LoginForm;