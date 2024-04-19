import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Form, Row, Space } from "antd";
import { useNavigate } from "react-router-dom";

import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";
import { useAddCardMutation } from "../../app/service/cards";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Layout from "../../components/layout/Layout";
import { SelectCard } from "../../features/cardSlice";

const AddCardForm = () => {
  const [doAddCard] = useAddCardMutation();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onAddCard = async (data) => {
    try {
      await doAddCard(data).unwrap();
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
    <Layout>
      <Row align="middle" justify="center" style={{ height: "50vh" }}>
        <Card title="Добавьте карту" style={{ width: "30rem" }}>
          <Form onFinish={onAddCard}>
            <CustomInput placeholder="код" name="code" type="number" />
            <CustomInput placeholder="дата" name="date" />
            <CustomInput placeholder="cvv" name="cvv" />

            <CustomButton
              className="custom-andt-btn"
              htmlType="submit"
              type="primary"
            > 
              Отправить
            </CustomButton>
            <Space>
              <ErrorMessage message={error} />
            </Space>
          </Form>
        </Card>
      </Row>
    </Layout>
  );
};

export default AddCardForm;
