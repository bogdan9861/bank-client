import React, { useEffect, useState } from "react";
import { Divider, Modal, Space } from "antd";

import { useSelector } from "react-redux";
import { selectUser } from "../../features/AuthSlice";
import { SelectCard } from "../../features/cardSlice";
import { splitOnSpaces } from "../../utils/splitOnSpaces";
import CustomButton from "../customButton/CustomButton";
import Loader from "../loader/Loader";

import "../../assets/styles/index.css";
import "./CardOptions.scss";

import mastercard from "../../assets/images/icons/mastercard.svg";
import shortArrow from "../../assets/images/icons/short-arrow.svg";
import {
  useAddCardMutation,
  useGetCardQuery,
  useRemoveCardMutation,
} from "../../app/service/cards";

const CardOptions = () => {
  const { isLoading, data } = useGetCardQuery();
  const card = useSelector(SelectCard);
  const user = useSelector(selectUser);
  const [doAddCard] = useAddCardMutation();
  const [doRemove] = useRemoveCardMutation();

  const [oppenModalAdd, setOppenModalAdd] = useState(false);
  const [oppenModalRemove, setOppenModalRemove] = useState(false);
  const [cvvVisableable, setCvvVisable] = useState(false);

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
          <img className="cardOptions__card-logo" src={mastercard}></img>
        </div>

        <div className="cardOptions__card-inner">
          <span className="cardOptions__card-number">
            {splitOnSpaces(card?.code || "")}
          </span>
          <div className="cardOptions__card-cvv">
            <button
              className="cardOptions__card-cvv__text"
              onClick={() => setCvvVisable(!cvvVisableable)}
            >
              {(cvvVisableable && card?.cvv) || "cvv"}
            </button>
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
          style={{ display: data ? "block" : "none" }}
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
