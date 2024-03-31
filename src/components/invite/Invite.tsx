import React from 'react'

import './Invite.scss'
import copy from '../../assets/images/icons/copy.svg'

const Invite = () => {
    return (
        <div className='invite'>
            <div className="invite__inner">
                <p className="invite__text">
                    Invite a friend with code below and redeem special bonus USD 15 from us!
                </p>
                <div className="invite__wrapper">
                    <span className="invite__code">JELLYPOENA-SEP2023</span>
                    <button className='invite__code-copy'>
                        <img src={copy} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Invite