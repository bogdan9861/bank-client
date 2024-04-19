import React, { useState } from "react";
import { Card, Col, Divider, Flex, Row, Space, Typography } from "antd";

import CustomInput from "../../components/customInput/CustomInput";

import profileLogo from "../../assets/images/content/profileBlank.png";
import "../../components/header/Header.scss";
import { log } from "console";

const Profile = () => {
  const [profileImgPath, setProfileImgPath] = useState("");

  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Card style={{ width: "50vw", height: "50vh" }}>
        <Flex align="center">
          <img src={profileImgPath} alt="" />
          <span className="header__profile-name">Abama</span>
        </Flex>
        <Divider />
        <Col>
          <Flex>
            <Typography.Text>фото профиля: </Typography.Text>
            <input
              type="file"
            />
          </Flex>
          <Typography.Text>Номер телефона: +79384102612</Typography.Text>
        </Col>
      </Card>
    </Flex>
  );
};

export default Profile;
