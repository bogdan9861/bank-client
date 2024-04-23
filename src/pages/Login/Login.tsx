import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Space, Row, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import { Paths } from "../../Paths";
import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { UserData, useLoginMutation } from "../../app/service/auth";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

const Login = () => {
  const [loginUser] = useLoginMutation();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();
      navigate("/");
    } catch (e) {
      console.log(e);

      if (e?.data?.message) {
        setError(e.data.message);
      } else {
        setError(e.error);
      }
    }
  };

  return (
    <Row align="middle" justify="center" style={{ height: "100vh" }}>
      <Card title="Войдите" style={{ width: "30rem" }}>
        <Form onFinish={login}>
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
          <ErrorBoundary>
            <ErrorMessage message={error} />
          </ErrorBoundary>
        </Space>
      </Card>
    </Row>
  );
};

export default Login;
