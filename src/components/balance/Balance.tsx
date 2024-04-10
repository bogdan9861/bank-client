import React, { useState, useEffect } from "react";
import { useGetCardQuery, useTopUpMutation } from "../../app/service/cards";

import SendForm from "../sendForm/SendForm";
import { Button, Form, Modal, notification } from "antd";
import { ArrowUpOutlined, PlusOutlined } from "@ant-design/icons";
import CustomButton from "../../components/customButton/CustomButton";
import Loader from "../loader/Loader";
import CustomInput from "../customInput/CustomInput";

import "./Balance.scss";
import { useSelector } from "react-redux";
import { SelectCard } from "../../features/cardSlice";

type Notification = {
  duration: number;
  description: string;
};

const Balance = () => {
  const { data, isLoading } = useGetCardQuery();
  const card = useSelector(SelectCard);

  const [oppenModalSend, setOppenModalSend] = useState<boolean>(false);
  const [oppenModalTopUp, setOppenModalTopUp] = useState<boolean>(false);

  const [doTopUp] = useTopUpMutation();
  const [api, contextHolder] = notification.useNotification();

  if (isLoading) {
    return <Loader />;
  }

  const openNotification = ({ duration, description }: Notification) => {
    api.open({
      message: "Уведомление",
      placement: "topLeft",
      description,
      duration,
    });
  };

  const topUp = async (data) => {
    try {
      await doTopUp(data).unwrap();
      setOppenModalTopUp(false);

      openNotification({
        description: "Вы успешно пополнили балас",
        duration: 3,
      });
    } catch (error) {
      openNotification({
        description: `${error.data.message}`,
        duration: 10,
      });
    }
  };

  return (
    <div className="balance">
      {contextHolder}
      <div className="balance__inner">
        <span className="balance__title">Total Balance</span>
        <p className="balance__text">
          {card?.ballance}
          <span className="balance__text-currency"> RUB</span>
        </p>
        <div className="balance__btns">
          <div className="balance__btn-wrapper">
            <button
              className="balance__btn"
              onClick={() => {
                setOppenModalSend(true);
              }}
            >
              Send
              <ArrowUpOutlined />
            </button>
          </div>
          <div className="balance__btn-wrapper">
            <button
              className="balance__btn"
              onClick={() => setOppenModalTopUp(true)}
            >
              Top Up
              <PlusOutlined />
            </button>
          </div>
        </div>
      </div>

      <Modal
        open={oppenModalSend}
        onCancel={() => setOppenModalSend(false)}
        title="Перевод по номеру телефона"
      >
        <SendForm setModalOppen={setOppenModalSend} />
      </Modal>

      <Modal
        open={oppenModalTopUp}
        onCancel={() => setOppenModalTopUp(false)}
        title="Перевод по номеру телефона"
      >
        <Form onFinish={topUp}>
          <CustomInput placeholder="сумма" name="sum" />

          <CustomButton
            className="custom-andt-btn"
            htmlType="submit"
            type="primary"
          >
            Отправить
          </CustomButton>
        </Form>
      </Modal>
    </div>
  );
};

export default Balance;
