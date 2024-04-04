import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Space, Row, Card, Typography, Flex } from "antd";
import { useNavigate } from "react-router-dom";

import { Paths } from "../../Paths";
import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { User } from "@prisma/client";
import { UserData, useLoginMutation } from "../../app/service/auth";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Login = () => {
  const [user, setUser] = useState<User>();
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();
      navigate("/");
    } catch (e) {
      if (e.data.message) {
        setError(e.data.message);
      } else {
        setError(e);
      }
    }
  };

  return (
    <Row align="middle" justify="center" style={{ height: "100vh" }}>
      <Card title="Войдите" style={{ width: "30rem" }}>
        <Form onFinish={login}>
          <CustomInput name="name" placeholder="Введите имя" type="text" />
          <CustomInput
            name="phoneNumber"
            placeholder="Введите номер телефона"
            type="phone"
          />
          <PasswordInput name="password" placeholder="Пароль" />

          <CustomButton type="primary" htmlType="submit">
            Войти
          </CustomButton>
        </Form>
        <Space direction="vertical" size="large">
          <Typography.Text>
            Нет аккаунта? <Link to={Paths.register}> Зарегистировать </Link>
          </Typography.Text>
          <ErrorMessage message={error} />
        </Space>
      </Card>
    </Row>
  );
};

export default Login;
