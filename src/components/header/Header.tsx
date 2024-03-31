import React from 'react'

import logo from '../../assets/images/content/logo.png'
import profileBlank from '../../assets/images/content/profileBlank.png'

import './Header.scss'
import '../../assets/styles/App.css'

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__inner">
          <div className="header__profile-wrapper">
            <img className="header__logo" src={logo} alt="" />
            <div className="header__profile">
              <p className="header__profile-text">
                Welcome back, <span className='header__profile-name'>Jelly</span>
              </p>
              <img className="header__profile-img" src={profileBlank} alt="" />
            </div>
          </div>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__list-item">
                <a className='header-nav__list-link' href="#">Summary</a>
              </li>
              <li className="header-nav__list-item">
                <a className='header-nav__list-link' href="#">Cards</a>
              </li>
              <li className="header-nav__list-item">
                <a className='header-nav__list-link' href="#">Activity</a>
              </li>
              <li className="header-nav__list-item">
                <a className='header-nav__list-link' href="#">Recipients</a>
              </li>
              <li className="header-nav__list-item">
                <a className='header-nav__list-link' href="#">Help Center</a>
              </li>
              <li className="header-nav__list-item">
                <a className='header-nav__list-link' href="#">Earn Figts</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header