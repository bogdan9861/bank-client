import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

type Props = {}

const SignUp = (props: Props) => {


    return (
        <div className='registration'>
            <h1 className='registration__title'>Sign Up</h1>
            <form className="registration__form">
                <input className="registration__input"
                    type="text"
                    placeholder='телефон'
                />

                <input
                    className="registration__input"
                    type="email"
                    placeholder='email'
                />

                <input
                    className="registration__input"
                    type="email"
                    placeholder='пароль'
                />

                <input
                    className="registration__input"
                    type="email"
                    placeholder='повторите пароль'
                />

                <input
                    className="registration__input"
                    type="text"
                    placeholder='Фамилия'
                />
                <input className="registration__input"
                    type="text"
                    placeholder='Имя'
                />
                <input
                    className="registration__input"
                    type="text"
                    placeholder='Отчество'
                />

                <button type='submit'>подтвердить</button>
            </form>
        </div>
    )
}

export default SignUp