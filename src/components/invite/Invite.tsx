import React from "react";
import { useSelector } from "react-redux";
import { notification } from "antd";

import { selectUser } from "../../features/AuthSlice";

import "./Invite.scss";
import copy from "../../assets/images/icons/copy.svg";

type Notification = {
  duration: number;
  description: string;
};

const Invite = () => {
  const user = useSelector(selectUser);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = ({ description, duration }: Notification) => {
    api.open({
      message: "Уведомление",
      placement: "topRight",
      description,
      duration,
    });
  };

  const onCopy = () => {
    navigator.clipboard.writeText(user.referal).then(
      () => {
        openNotification({
          description: "Текст успешно скопирован в буфер обмена",
          duration: 3,
        });
      },
      (err) => {
        openNotification({
          description: "Произошла ошибка при копировании текста",
          duration: 3,
        });
      }
    );
  };

  return (
    <div className="invite">
      {contextHolder}
      <div className="invite__inner">
        <p className="invite__text">
          Invite a friend with code below and redeem special bonus USD 15 from
          us!
        </p>
        <div className="invite__wrapper">
          <span className="invite__code">{user.referal}</span>
          <button className="invite__code-copy" onClick={onCopy}>
            <img src={copy} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invite;
