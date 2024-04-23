import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { SelectContacts } from "../../features/ContactsSlice";

import {
  Contact,
  useAddContactMutation,
  useGetContactsQuery,
  useRemoveContactMutation,
} from "../../app/service/contacts";

import { Flex, Form, Modal, notification } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

import SendForm from "../sendForm/SendForm";
import Loader from "../loader/Loader";
import CustomInput from "../customInput/CustomInput";
import CustomButton from "../customButton/CustomButton";

import noPhoto from "../../assets/images/icons/no-photo.png";

import "./Contacts.scss";
import { Link } from "react-router-dom";
import { Paths } from "../../Paths";
import FileInput from "../fileInput/FileInput";

import { Notification } from "../../types/notification";

const Contacts = () => {
  const { isLoading, data } = useGetContactsQuery();
  const [doAddContact] = useAddContactMutation();
  const [doRemoveContact] = useRemoveContactMutation();
  const [api, contextHolder] = notification.useNotification();

  const contacts = useSelector(SelectContacts);

  const [oppenCreate, setOppenCreate] = useState(false);
  const [oppenSend, setOppenSend] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact>();
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

  const addContact = async (data) => {
    console.log({ ...data, url });
    try {
      await doAddContact({ ...data, url }).unwrap();
      openNotification({
        description: "Контакт успешно добавлен",
        duration: 3,
      });
      setOppenCreate(false);
    } catch (error) {
      if (error.data.message) {
        openNotification({
          description: error.data.message,
          duration: 5,
        });
      } else if (error.originalStatus === 413) {
        openNotification({
          description: "Слишком большой размер изображения",
          duration: 5,
        });
      } else {
        openNotification({
          description: "Произошла неизвестная ошибка",
          duration: 5,
        });
      }
    }
  };

  const removeContact = async (id: string) => {
    try {
      await doRemoveContact(id).unwrap();
      openNotification({
        description: "Контакт успешно удалён",
        duration: 3,
      });
    } catch (error) {
      if (error.data.message) {
        openNotification({
          description: error.data.message,
          duration: 5,
        });
      } else {
        openNotification({
          description: "Произошла неизвестная ошибка",
          duration: 5,
        });
      }
    }
  };

  const onContactClick = (el) => {
    setOppenSend(true);
    setCurrentContact(el);
  };

  return (
    <div className="contacts">
      {contextHolder}
      <div className="contacts__top">
        <span className="contacts__title">Recent Contacts</span>
        <Link className="contacts__link" to={Paths.contacts}>
          All contacts
        </Link>
      </div>
      <ul className="contacts__list">
        <button className="contacts__add" onClick={() => setOppenCreate(true)}>
          <UserAddOutlined />
          <span className="contacts__add-text">Add</span>
        </button>
        {contacts?.map((el, i) => {
          if (i > 4) return;
          return (
            <div className="contacts__list-item__wrapper" key={el.id}>
              <li
                className="contacts__list-item"
                onClick={() => onContactClick(el)}
              >
                <a className="contacts__list-link" href="#">
                  <img
                    className="contacts__list-img"
                    src={el.photo || noPhoto}
                    alt=""
                  />
                  <span className="contacts__list-name">{el.name}</span>
                </a>
              </li>
              <button
                className="contacts__list-item__remove"
                onClick={() => removeContact(el.id)}
              >
                x
              </button>
            </div>
          );
        })}
      </ul>
      <Modal
        open={oppenSend}
        title={`Перевод для ${currentContact?.name}`}
        onCancel={() => setOppenSend(false)}
      >
        <SendForm
          setModalOppen={setOppenSend}
          phone={currentContact?.phoneNumber}
        />
      </Modal>

      <Modal
        open={oppenCreate}
        title="Создайте контакт"
        onCancel={() => setOppenCreate(false)}
      >
        <Form onFinish={addContact}>
          <img
            className="contacts__list-img"
            style={{ width: "50px", height: "50px", marginBottom: "15px" }}
            src={url || noPhoto}
            alt=""
          />
          <FileInput setUrl={setUrl} />
          <CustomInput name="name" placeholder="Имя" required={true} />
          <CustomInput
            name="phoneNumber"
            placeholder="Телефон"
            required={true}
          />
          <CustomButton htmlType="submit" type="primary">
            создать
          </CustomButton>
        </Form>
      </Modal>
    </div>
  );
};

export default Contacts;
