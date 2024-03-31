import React from 'react'

import './AsideInfo.scss'
import infoImg from '../../assets/images/icons/asideInfo-img.png'

const AsideInfo = () => {
    return (
        <div className='asideInfo'>
            <div className="asideInfo__inner">
                <img className="asideInfo__img" src={infoImg} alt="" />
                <div className="asideInfo__content">
                    <p className="asideInfo__text">
                        You have USD 1.000 pending money.
                        it will be ready in 2 buisness days
                    </p>
                    <a className="asideInfo__link" href="#">Get your money now</a>
                </div>
            </div>
        </div>
    )
}

export default AsideInfo