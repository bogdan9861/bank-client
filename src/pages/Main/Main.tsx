import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/AuthSlice";
import { useNavigate } from "react-router-dom";

import "./Main.css";

import { Paths } from "../../Paths";

import CardOptions from "../../components/CardOptions/CardOptions";
import AsideInfo from "../../components/asideInfo/AsideInfo";
import Balance from "../../components/balance/Balance";
import Invite from "../../components/invite/Invite";
import Contacts from "../../components/contacts/Contacts";
import History from "../../components/history/History";
import { useGetCardQuery } from "../../app/service/cards";
import { SelectCard } from "../../features/cardSlice";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

type Props = {};

const Main = (props: Props) => {
  const user = useSelector(selectUser);
  const {isLoading, data} = useGetCardQuery();
  const card = useSelector(SelectCard);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !localStorage.getItem("token")) {
      navigate(Paths.login);
    }
    
    if (!isLoading && !data && !card) {
      navigate(Paths.addCard);
    }

  }, [navigate, user, card, isLoading]);
  
  if (isLoading){
    return <Loader/>
  }

  return (
    <Layout>
      <div className="app__inner">
        <aside className="app__aside">
          <CardOptions />
          <AsideInfo />
        </aside>
        <main className="app__main">
          <div className="app__main-top">
            <Balance />
            <Invite />
          </div>
          <Contacts />
          <History />
        </main>
      </div>
    </Layout>
  );
};

export default Main;
