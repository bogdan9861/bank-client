import React, { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { logout } from "../../features/AuthSlice";

import logo from "../../assets/images/content/logo.png";
import profileBlank from "../../assets/images/content/profileBlank.png";

import "./Header.scss";
import "../../assets/styles/App.css";

import { useCurrentQuery } from "../../app/service/auth";
import Loader from "../loader/Loader";

const Header = () => {
  const { isLoading, data } = useCurrentQuery();

  const dispatch = useDispatch();

  if (isLoading) {
    return <Loader />;
  }

  const onExit = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__profile-wrapper">
            <img className="header__logo" src={logo} alt="" />
            <div className="header__profile">
              <p className="header__profile-text">
                Welcome back,{" "}
                <span className="header__profile-name">{data?.name}</span>
              </p>
              <img className="header__profile-img" src={profileBlank} alt="" />
            </div>
          </div>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__list-item">
                <a className="header-nav__list-link" href="#">
                  Summary
                </a>
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
      </div>
    </header>
  );
};

export default Header;
