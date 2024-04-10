import { Form, notification } from "antd";
import React from "react";
import CustomInput from "../customInput/CustomInput";
import CustomButton from "../customButton/CustomButton";
import { useTransactionMutation } from "../../app/service/cards";

type Notification = {
  duration: number;
  description: string;
};

type Props = {
  setModalOppen: (oppen: boolean) => void;
  phone?: string;
};

const SendForm = ({ setModalOppen, phone }: Props) => {
  const [doTransaction] = useTransactionMutation();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = ({ duration, description }: Notification) => {
    api.open({
      message: "Уведомление",
      placement: "topLeft",
      description,
      duration,
    });
  };

  const transaction = async (data) => {
    const formData = {
      phoneNumber: phone || data.phoneNumber,
      ...data,
    };
    try {
      await doTransaction(formData).unwrap();
      openNotification({
        description: "Транзакция прошла успешно",
        duration: 3,
      });
      setModalOppen(false);
    } catch (error) {
      if (error.data.message) {
        openNotification({
          description: error.data.message,
          duration: 5,
        });
      } else {
        openNotification({
          description: "Неизвестная ошибка",
          duration: 5,
        });
      }
    }
  };

  return (
    <Form onFinish={transaction}>
      {contextHolder}
      {phone ? null : <CustomInput placeholder="телефон" name="phoneNumber" />}
      <CustomInput placeholder="сумма" name="sum" />
      <CustomInput
        placeholder="причина (не обязательно)"
        name="reason"
        required={false}
      />

      <CustomButton
        className="custom-andt-btn"
        htmlType="submit"
        type="primary"
      >
        Отправить
      </CustomButton>
    </Form>
  );
};

export default SendForm;
