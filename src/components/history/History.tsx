import React from "react";

import "./History.scss";

import arrow from "../../assets/images/icons/short-arrow.svg";
import profileBlank from "../../assets/images/content/profileBlank.png";
import { useGetHistoryQuery } from "../../app/service/history";
import Loader from "../loader/Loader";
import { useSelector } from "react-redux";
import { SelectCard } from "../../features/cardSlice";

const History = () => {
  const { data, isLoading } = useGetHistoryQuery();
  const card = useSelector(SelectCard);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="history">
      <div className="history__top">
        <span className="history__title">Transactions History</span>
        <div className="history__filter">
          <input
            className="history__filter-input"
            type="date"
            placeholder="Select Date Range"
          />
          <button className="history__filter-btn">
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="history__inner">
        {data?.length > 0 ? (
          data?.map((history) => {
            return (
              <div className="history__item" key={history.id}>
                <div className="history__profile">
                  <img
                    className="history__profile-img"
                    src={profileBlank}
                    alt=""
                  />
                  <div className="history__profile-content">
                    <span className="history__profile-name">
                      {history.sender}
                    </span>
                    <span className="history__profile-from">
                      to: {history.recipient}
                    </span>
                  </div>
                </div>
                <div className="history__date">
                  <span className="history__date-text">{history.date}</span>
                  <span className="history__date-time">{history.time}</span>
                </div>
                <div className="history__price">
                  <p className="history__price-text">
                    <span className="history__price-currency">RUB</span>
                    {history.sum}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>История транзакий пуста</p>
        )}
      </div>
    </div>
  );
};

export default History;
