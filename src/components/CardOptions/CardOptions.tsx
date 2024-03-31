import React from 'react'

import './CardOptions.scss'
import '../../assets/styles/index.css'

import mastercard from '../../assets/images/icons/mastercard.svg'
import shortArrow from '../../assets/images/icons/short-arrow.svg'

const CardOptions = () => {
    return (
        <div className='cardOptions'>
            <div className="cardOptions__top">
                <span className="cardOptions__top-text">Cards</span>
                <a className="cardOptions__top-link" href="#">Show All</a>
            </div>

            <div className="cardOptions__card">
                <div className="cardOptions__card-inner">
                    <span className="cardOptions__card-name">Jelly Grande</span>
                    <span className="cardOptions__card-number">0123 4567 8910</span>
                </div>
                <div className="cardOptions__card-inner">
                    <img className="cardOptions__card-logo" src={mastercard}></img>
                    <div className="cardOptions__card-cvv">
                        <span className='cardOptions__card-cvv__text'>CVV</span>
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
                <button className='cardOptions__btn add-btn'>Add Cart <span>+</span></button>
                <button className='cardOptions__btn remove-btn'>Remove <span>-</span></button>
            </div>
        </div>
    )
}

export default CardOptions