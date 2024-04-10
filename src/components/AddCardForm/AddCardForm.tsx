import { Card, Form, Row, Space } from "antd";
import React, { useState } from "react";
import CustomInput from "../customInput/CustomInput";
import CustomButton from "../customButton/CustomButton";
import { useAddCardMutation } from "../../app/service/cards";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const AddCardForm = () => {
  const [doAddCard] = useAddCardMutation();

  const [error, setError] = useState("");

  const onAddCard = async (data) => {
    try {
      await doAddCard(data).unwrap();
    } catch (error) {
      if (error.data.message) {
        setError(error);
      } else {
        setError("Не известная ошибка");
      }
    }
  };

  return (
    <Row align="middle" justify="center" style={{ height: "50vh" }}>
      <Card title="Добавьте карту" style={{ width: "30rem" }}>
        <Form onFinish={onAddCard}>
          <CustomInput placeholder="код" name="code" type="number"/>
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
  );
};

export default AddCardForm;
