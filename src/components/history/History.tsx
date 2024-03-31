import React from 'react'

import './History.scss'

import arrow from '../../assets/images/icons/short-arrow.svg'
import profileBlank from '../../assets/images/content/profileBlank.png'

const History = () => {
    return (
        <div className='history'>
            <div className="history__top">
                <span className='history__title'>Transactions History</span>
                <div className="history__filter">
                    <input className='history__filter-input' type="date" placeholder='Select Date Range' />
                    <button className='history__filter-btn'>
                        <img src={arrow} alt="" />
                    </button>
                </div>
            </div>
            <div className="history__inner">
                <div className="history__item">
                    <div className="history__profile">
                        <img className="history__profile-img" src={profileBlank} alt="" />
                        <div className="history__profile-content">
                            <span className="history__profile-name">Alina Sooela</span>
                            <span className="history__profile-from">Sent: Meal Bills</span>
                        </div>
                    </div>
                    <div className="history__date">
                        <span className="history__date-text">Wed. 27 September 2023</span>
                        <span className="history__date-time">1:05 PM</span>
                    </div>
                    <div className="history__price">
                        <p className='history__price-text'><span className='history__price-currency'>USD</span>275.00</p>
                    </div>
                </div>

                <div className="history__item">
                    <div className="history__profile">
                        <img className="history__profile-img" src={profileBlank} alt="" />
                        <div className="history__profile-content">
                            <span className="history__profile-name">Alina Sooela</span>
                            <span className="history__profile-from">Sent: Meal Bills</span>
                        </div>
                    </div>
                    <div className="history__date">
                        <span className="history__date-text">Wed. 27 September 2023</span>
                        <span className="history__date-time">1:05 PM</span>
                    </div>
                    <div className="history__price">
                        <p className='history__price-text'><span className='history__price-currency'>USD</span>275.00</p>
                    </div>
                </div>

                <div className="history__item">
                    <div className="history__profile">
                        <img className="history__profile-img" src={profileBlank} alt="" />
                        <div className="history__profile-content">
                            <span className="history__profile-name">Alina Sooela</span>
                            <span className="history__profile-from">Sent: Meal Bills</span>
                        </div>
                    </div>
                    <div className="history__date">
                        <span className="history__date-text">Wed. 27 September 2023</span>
                        <span className="history__date-time">1:05 PM</span>
                    </div>
                    <div className="history__price">
                        <p className='history__price-text'><span className='history__price-currency'>USD</span>275.00</p>
                    </div>
                </div>

                <div className="history__item">
                    <div className="history__profile">
                        <img className="history__profile-img" src={profileBlank} alt="" />
                        <div className="history__profile-content">
                            <span className="history__profile-name">Alina Sooela</span>
                            <span className="history__profile-from">Sent: Meal Bills</span>
                        </div>
                    </div>
                    <div className="history__date">
                        <span className="history__date-text">Wed. 27 September 2023</span>
                        <span className="history__date-time">1:05 PM</span>
                    </div>
                    <div className="history__price">
                        <p className='history__price-text'><span className='history__price-currency'>USD</span>275.00</p>
                    </div>
                </div>

                <div className="history__item">
                    <div className="history__profile">
                        <img className="history__profile-img" src={profileBlank} alt="" />
                        <div className="history__profile-content">
                            <span className="history__profile-name">Alina Sooela</span>
                            <span className="history__profile-from">Sent: Meal Bills</span>
                        </div>
                    </div>
                    <div className="history__date">
                        <span className="history__date-text">Wed. 27 September 2023</span>
                        <span className="history__date-time">1:05 PM</span>
                    </div>
                    <div className="history__price">
                        <p className='history__price-text'><span className='history__price-currency'>USD</span>275.00</p>
                    </div>
                </div>

                <div className="history__item">
                    <div className="history__profile">
                        <img className="history__profile-img" src={profileBlank} alt="" />
                        <div className="history__profile-content">
                            <span className="history__profile-name">Alina Sooela</span>
                            <span className="history__profile-from">Sent: Meal Bills</span>
                        </div>
                    </div>
                    <div className="history__date">
                        <span className="history__date-text">Wed. 27 September 2023</span>
                        <span className="history__date-time">1:05 PM</span>
                    </div>
                    <div className="history__price">
                        <p className='history__price-text'><span className='history__price-currency'>USD</span>275.00</p>
                    </div>
                </div>

                <div className="history__item">
                    <div className="history__profile">
                        <img className="history__profile-img" src={profileBlank} alt="" />
                        <div className="history__profile-content">
                            <span className="history__profile-name">Alina Sooela</span>
                            <span className="history__profile-from">Sent: Meal Bills</span>
                        </div>
                    </div>
                    <div className="history__date">
                        <span className="history__date-text">Wed. 27 September 2023</span>
                        <span className="history__date-time">1:05 PM</span>
                    </div>
                    <div className="history__price">
                        <p className='history__price-text'><span className='history__price-currency'>USD</span>275.00</p>
                    </div>
                </div>

                <div className="history__item">
                    <div className="history__profile">
                        <img className="history__profile-img" src={profileBlank} alt="" />
                        <div className="history__profile-content">
                            <span className="history__profile-name">Alina Sooela</span>
                            <span className="history__profile-from">Sent: Meal Bills</span>
                        </div>
                    </div>
                    <div className="history__date">
                        <span className="history__date-text">Wed. 27 September 2023</span>
                        <span className="history__date-time">1:05 PM</span>
                    </div>
                    <div className="history__price">
                        <p className='history__price-text'><span className='history__price-currency'>USD</span>275.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History