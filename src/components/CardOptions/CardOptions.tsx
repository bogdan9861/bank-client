import React, { useState } from "react";

import "./CardOptions.scss";
import "../../assets/styles/index.css";

import mastercard from "../../assets/images/icons/mastercard.svg";
import shortArrow from "../../assets/images/icons/short-arrow.svg";
import {
  useAddCardMutation,
  useGetCardQuery,
  useRemoveCardMutation,
} from "../../app/service/cards";
import Loader from "../loader/Loader";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/AuthSlice";
import CustomInput from "../customInput/CustomInput";
import { Divider, Form, Modal, Row, Space } from "antd";
import CustomButton from "../customButton/CustomButton";
import { SelectCard } from "../../features/cardSlice";

const CardOptions = () => {
  const { isLoading, data } = useGetCardQuery();
  const card = useSelector(SelectCard);
  const user = useSelector(selectUser);
  const [doAddCard] = useAddCardMutation();
  const [doRemove] = useRemoveCardMutation();

  const [oppenModalAdd, setOppenModalAdd] = useState(false);
  const [oppenModalRemove, setOppenModalRemove] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  const onAddCard = async (data) => {
    console.log(data);

    try {
      await doAddCard(data).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const removeCard = async () => {
    try {
      await doRemove(data?.id).unwrap();
      setOppenModalRemove(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cardOptions">
      <div className="cardOptions__top">
        <span className="cardOptions__top-text">Cards</span>
        <a className="cardOptions__top-link" href="#">
          Show All
        </a>
      </div>

      <div className="cardOptions__card">
        <div className="cardOptions__card-inner">
          <span className="cardOptions__card-name">{user?.name}</span>
          <span className="cardOptions__card-number">{card?.code}</span>
        </div>
        <div className="cardOptions__card-inner">
          <img className="cardOptions__card-logo" src={mastercard}></img>
          <div className="cardOptions__card-cvv">
            <span className="cardOptions__card-cvv__text">{card?.cvv}</span>
          </div>
        </div>
      </div>

      <ul className="cardOptions__links links-list">
        <li className="links-list__item">
          <a className="links-list__link card-ico" href="#">
            <span className="links-list__item-text">Show Card Details</span>
            <img src={shortArrow} alt="" />
          </a>
        </li>
        <li className="links-list__item">
          <a className="links-list__link key-ico" href="#">
            <span className="links-list__item-text">Show Card Details</span>
            <img src={shortArrow} alt="" />
          </a>
        </li>
        <li className="links-list__item">
          <a className="links-list__link lock-ico" href="#">
            <span className="links-list__item-text">Show Card Details</span>
            <img src={shortArrow} alt="" />
          </a>
        </li>
        <li className="links-list__item">
          <a className="links-list__link edit-ico" href="#">
            <span className="links-list__item-text">Show Card Details</span>
            <img src={shortArrow} alt="" />
          </a>
        </li>
      </ul>
      <div className="cardOptions__btns">
        <button
          className="cardOptions__btn remove-btn"
          onClick={() => setOppenModalRemove(true)}
        >
          Remove <span>-</span>
        </button>
      </div>

      <Modal
        open={oppenModalRemove}
        onCancel={() => setOppenModalRemove(false)}
        title="Внимание"
      >
        Вы уверены, что хотите удалить карту?
        <Divider />
        <Space>
          <CustomButton
            type="primary"
            onClick={() => setOppenModalRemove(false)}
          >
            нет
          </CustomButton>
          <CustomButton danger={true} onClick={() => removeCard()}>
            Да
          </CustomButton>
        </Space>
      </Modal>
    </div>
  );
};

export default CardOptions;
