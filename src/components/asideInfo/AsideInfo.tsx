import React, { useEffect, useState } from "react";

import "./AsideInfo.scss";
import infoImg from "../../assets/images/icons/asideInfo-img.png";
import { useTopUpMutation } from "../../app/service/cards";
import Loader from "../loader/Loader";

const AsideInfo = () => {
  const [getMoney] = useTopUpMutation();
  const [isTaken, setIsTaken] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsTaken(!!localStorage.getItem("MoneyIsTaken"));
    setLoading(false);
  }, []);

  const topUp = async () => {
    if (isTaken && !loading) return;

    try {
      await getMoney({ sum: "1000" }).unwrap();
      localStorage.setItem("MoneyIsTaken", "true");
      setIsTaken(true);
    } catch (error) {
      console.log(error);
    }
  };

  const Content = loading ? (
    <Loader />
  ) : (
    <div className="asideInfo__content">
      <p className="asideInfo__text">
        You have USD 10 pending money. it will be ready in 2 buisness days
      </p>
      <span className="asideInfo__link" onClick={topUp}>
        Get your money now
      </span>
    </div>
  );

  return (
    <div className="asideInfo">
      <div className="asideInfo__inner">
        <img className="asideInfo__img" src={infoImg} alt="" />
        {!isTaken ? (
          Content
        ) : (
          <div className="asideInfo__content">
            <p className="asideInfo__text">You have already take the money</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AsideInfo;
