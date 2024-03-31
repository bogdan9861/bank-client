import React from 'react'

import './Main.css'

import Header from '../../components/header/Header'
import CardOptions from '../../components/CardOptions/CardOptions'
import AsideInfo from '../../components/asideInfo/AsideInfo'
import Balance from '../../components/balance/Balance'
import Invite from '../../components/invite/Invite'
import Contacts from '../../components/contacts/Contacts'
import History from '../../components/history/History'

type Props = {}

const Main = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="app__inner">
          <aside className='app__aside'>
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
      </div>
    </div>
  )
}

export default Main