import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/AuthSlice";
import { remove } from "../../features/cardSlice";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/content/logo.png";
import profileBlank from "../../assets/images/content/profileBlank.png";

import "./Header.scss";
import "../../assets/styles/App.css";

import { useCurrentQuery } from "../../app/service/auth";
import Loader from "../loader/Loader";
import { Paths } from "../../Paths";

const Header = () => {
  const { isLoading, data } = useCurrentQuery();
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  const onExit = () => {
    dispatch(logout());
    dispatch(remove());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__profile-wrapper">
          <Link to={Paths.home}>
            <img className="header__logo" src={logo} alt="" />
          </Link>
          <div className="header__profile">
            <p className="header__profile-text">
              Hello,
              <span className="header__profile-name">{user?.name}</span>
            </p>
            <Link to={Paths.profile}>
              <img className="header__profile-img" src={profileBlank} alt="" />
            </Link>
          </div>
        </div>
        <nav className="header-nav">
          <ul className="header-nav__list">
            <li className="header-nav__list-item">
              <Link className="header-nav__list-link" to={Paths.contacts}>
                Контакты
              </Link>
            </li>
            <li className="header-nav__list-item">
              <a className="header-nav__list-link" href="#">
                Cards
              </a>
            </li>
            <li className="header-nav__list-item">
              <a className="header-nav__list-link" href="#">
                Activity
              </a>
            </li>
            <li className="header-nav__list-item">
              <a className="header-nav__list-link" href="#">
                Recipients
              </a>
            </li>
            <li className="header-nav__list-item">
              <a className="header-nav__list-link" href="#">
                Help Center
              </a>
            </li>
            <li className="header-nav__list-item">
              <button
                className="header-nav__list-link"
                onClick={() => onExit()}
              >
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
