import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Space, Row, Card, Typography } from "antd";

import { Paths } from "../../Paths";
import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { useRegisterMutation } from "../../app/service/auth";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Register = () => {
  const [doRegister] = useRegisterMutation();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (data) => {
    try {
      const user = await doRegister(data).unwrap();
      localStorage.setItem("token", user.token);

      navigate("/");
    } catch (error) {
      if (error.data.message) {
        setError(error.data.message);
      } else {
        setError("Не известная ошибка");
      }
    }
  };

  return (
    <Row align="middle" justify="center" style={{ height: "100vh" }}>
      <Card title="Регистрация" style={{ width: "30rem" }}>
        <Form onFinish={register}>
          <CustomInput name="name" placeholder="Введите имя" type="text" />
          <CustomInput
            name="phoneNumber"
            placeholder="Введите номер телефона"
            type="phone"
          />
          <PasswordInput name="password" placeholder="Пароль" />
          <PasswordInput
            name="confirmPassword"
            placeholder="Повторите пароль"
          />

          <CustomButton type="primary" htmlType="submit">
            Зарегистрироваться
          </CustomButton>
        </Form>
        <Space direction="vertical" size="large">
          <Typography.Text>
            Уже зарегистрированны? <Link to={Paths.login}> Войти </Link>
          </Typography.Text>
        </Space>
        <ErrorMessage message={error}></ErrorMessage>
      </Card>
    </Row>
  );
};

export default Register;
