// base
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

// modules
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="1">쨱쨱<br />0</div>,
        <div key="2">팔로잉<br />0</div>,
        <div key="3">팔로워<br />0</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>BH</Avatar>}
        title="Byungha"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func,
};

export default UserProfile;