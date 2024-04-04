import React from "react";

import "./Contacts.scss";
import addImg from "../../assets/images/icons/addImg.png";
import contactImg from "../../assets/images/icons/contact-img.png";
import { UserAddOutlined } from "@ant-design/icons";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__top">
        <span className="contacts__title">Recent Contacts</span>
        <a className="contacts__link" href="#">
          All contacts
        </a>
      </div>

      <ul className="contacts__list">
        <a className="contacts__add" href="#">
          <UserAddOutlined />
          <span className="contacts__add-text">Add</span>
        </a>
        {/* <li className="contacts__list-item">
          <a className="contacts__list-link" href="#">
            <img className="contacts__list-img" src={contactImg} alt="" />
            <span className="contacts__list-name">Corbyn</span>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Contacts;
