import React, { useEffect, useState, FC } from 'react'

import { Service } from '../Srvice/Service'

type users = {
  user: {
    name: string,
    phone: string,
    email: string
  }
}

const SignIn: FC = () => {

  const [users, setUsers] = useState<users>();

  const { getUsers } = Service();

  const onSingIn = (e: React.MouseEvent) => {
    e.preventDefault();
    getUsers()
      .then(res => setUsers(res))

  }

  useEffect(() => {
    console.log(users.user);
  }, [users])

  return (
    <form>
      <input placeholder='телефон' />
      <input placeholder='Email' />

      <button onClick={(e) => onSingIn(e)}>войти</button>
    </form>
  )
}

export default SignIn