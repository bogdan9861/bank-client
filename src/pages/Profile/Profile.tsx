import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Divider, Flex, Typography, notification } from "antd";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/AuthSlice";

import { useCurrentQuery, useSetPhotoMutation } from "../../app/service/auth";
import CustomButton from "../../components/customButton/CustomButton";
import Loader from "../../components/loader/Loader";
import FileInput from "../../components/fileInput/FileInput";

import noPhoto from "../../assets/images/icons/no-photo.png";

import "../../components/header/Header.scss";
import { Notification } from "../../types/notification";
import { SelectCard } from "../../features/cardSlice";
import { useGetCardQuery } from "../../app/service/cards";

const Profile = () => {
  const [sendPhoto] = useSetPhotoMutation();

  const { data, isLoading } = useCurrentQuery();
  const user = useSelector(selectUser);

  const getCard = useGetCardQuery();
  const card = useSelector(SelectCard);

  const [api, contextHolder] = notification.useNotification();

  const [url, setUrl] = useState("");

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

  const onSave = async () => {
    try {
      await sendPhoto(url).unwrap();
      openNotification({
        duration: 3,
        description: "Данные успешно сохранены",
      });
    } catch (error) {
      if (error.originalStatus === 413) {
        openNotification({
          duration: 5,
          description: "Слишком большой размер изображения",
        });
      } else if (e.data.message) {
        openNotification({
          duration: 5,
          description: e.data.message,
        });
      } else {
        openNotification({
          duration: 5,
          description: "Произошла неизвестная ошибка",
        });
      }
    }
  };

  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      {contextHolder}
      <Card style={{ width: "50vw", height: "50vh" }}>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <img
              className="header__logo"
              src={url || user?.photo || noPhoto}
              alt=""
            />
            <span className="header__profile-name">{user?.name}</span>
          </Flex>
          <Link to={"/"}>назад</Link>
        </Flex>

        <Divider />
        <Col>
          <FileInput setUrl={setUrl} />

          <p>Номер телефона: {user?.phoneNumber}</p>
          <p>code: {card?.code}</p>
          <p>date: {card?.date}</p>
          <p>cvv: {card?.cvv}</p>

          <CustomButton
            type="primary"
            onClick={onSave}
            style={{ marginTop: "20px" }}
          >
            Сохранить
          </CustomButton>
        </Col>
      </Card>
    </Flex>
  );
};

export default Profile;
