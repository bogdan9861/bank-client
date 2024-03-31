import React from 'react'

import './Balance.scss'

const Balance = () => {
    return (
        <div className='balance'>
            <div className="balance__inner">
                <span className="balance__title">Total Balance</span>
                <p className="balance__text">29,475.00 <span className='balance__text-currency'>USD</span></p>
                <div className="balance__btns">
                    <div className="balance__btn-wrapper">
                        <button className="balance__btn">
                            Send

                            <svg className='balance__btn-img' width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.38713 7.61853L5.68766 2.98708L5.68766 13.125C5.68766 13.608 6.05166 14 6.50015 14C6.94865 14 7.31265 13.608 7.31265 13.125C7.31265 12.642 7.31265 2.98708 7.31265 2.98708L11.6132 7.61853C11.9309 7.96066 12.4452 7.96066 12.762 7.61853C13.0789 7.27639 13.0797 6.72251 12.762 6.38126L7.07458 0.25616C6.99984 0.175659 6.91046 0.110909 6.81134 0.0662832C6.61228 -0.0220938 6.38803 -0.0220938 6.18897 0.0662832C6.09309 0.109159 6.00372 0.172158 5.92572 0.25616L0.238264 6.38126C-0.0794213 6.72339 -0.0794213 7.27727 0.238264 7.61853C0.555949 7.95978 1.07026 7.96066 1.38713 7.61853Z" fill="black" />
                                <defs>
                                    <clipPath id="clip0_2502_102">
                                        <rect y="14" width="14" height="13" rx="6.5" transform="rotate(-90 0 14)" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="balance__btn-wrapper">
                        <button className="balance__btn">
                            Request

                            <svg className='balance__btn-img' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2502_107)">
                                    <path d="M13.5148 6.38147L8.69524 11.0129V0.875014C8.69524 0.392006 8.28731 0 7.78468 0C7.28206 0 6.87413 0.392006 6.87413 0.875014C6.87413 1.35802 6.87413 11.0129 6.87413 11.0129L2.05457 6.38147C1.69855 6.03934 1.12216 6.03934 0.767049 6.38147C0.411933 6.72361 0.411022 7.27749 0.767049 7.61874L7.14092 13.7438C7.22469 13.8243 7.32485 13.8891 7.43594 13.9337C7.65903 14.0221 7.91034 14.0221 8.13342 13.9337C8.24087 13.8908 8.34103 13.8278 8.42844 13.7438L14.8023 7.61874C15.1583 7.27661 15.1583 6.72273 14.8023 6.38147C14.4463 6.04022 13.8699 6.03934 13.5148 6.38147Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2502_107">
                                        <rect x="15.0693" width="14" height="14.569" rx="7" transform="rotate(90 15.0693 0)" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </button>

                    </div>
                    <div className="balance__btn-wrapper">
                        <button className="balance__btn">
                            Top Up

                            <svg className='balance__btn-img' width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.31 14.855V0.644999H8.395V14.855H7.31ZM0.59 8.275V7.26H15.15V8.275H0.59Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Balance