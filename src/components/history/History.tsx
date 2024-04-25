import React, { useEffect, useState } from "react";

import "./History.scss";

import arrow from "../../assets/images/icons/short-arrow.svg";
import noPhoto from "../../assets/images/icons/no-photo.png";
import {
  History as HistoryType,
  useGetHistoryQuery,
} from "../../app/service/history";
import Loader from "../loader/Loader";
import { useSelector } from "react-redux";
import { SelectHistory } from "../../features/HistorySlice";
import { DateToSum } from "../../utils/DateToSum";

const History = () => {
  const { data, isLoading } = useGetHistoryQuery();
  const history = useSelector(SelectHistory);
  const [filteredHistory, setFilteredHistory] = useState<HistoryType[]>();

  const [dateValue, setDateValue] = useState("");

  useEffect(() => {
    setFilteredHistory(history);
  }, [history]);

  if (isLoading) {
    return <Loader />;
  }

  const onGetDate = () => {
    const day = +dateValue.split("-")[0];
    const month = +dateValue.split("-")[1];
    const year = +dateValue.split("-")[2];
    const filterDateSum = dateValue === '' ? 0 : day + month + year;

    const newArr = history.filter((el) => DateToSum(el.date) >= filterDateSum);

    setFilteredHistory(newArr);
  };

  return (
    <div className="history">
      <div className="history__top">
        <span className="history__title">Transactions History</span>
        <form className="history__filter" onSubmit={(e) => e.preventDefault()}>
          <input
            className="history__filter-input"
            type="date"
            placeholder="Select Date Range"
            onChange={(e) => setDateValue(e.target.value)}
          />
          <button className="history__filter-btn" onClick={onGetDate}>
            <img src={arrow} alt="" />
          </button>
        </form>
      </div>
      <ul className="history__inner">
        {filteredHistory?.length > 0 ? (
          filteredHistory?.map((history) => {
            return (
              <div className="history__item" key={history.id}>
                <div className="history__profile">
                  <img
                    className="history__profile-img"
                    src={history?.photo || noPhoto}
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
                  <span className="history__profile-reason">
                    {history.reason}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <p>История транзакий пуста</p>
        )}
      </ul>
    </div>
  );
};

export default History;
