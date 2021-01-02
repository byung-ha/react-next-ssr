// base
import React from 'react';
import Head from 'next/head';

// components
import AppLayout from "../components/AppLayout"

const Signup = () => {
  return (
    <>
      <Head>
        <title>Nodebird | 회원가입</title>
      </Head>
      <AppLayout>
        <div>회원가입 페이지</div>
      </AppLayout>
    </>
  ) 
};

export default Signup;