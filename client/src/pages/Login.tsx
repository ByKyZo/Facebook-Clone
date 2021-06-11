import React, { FormEvent, useRef, useState } from 'react';
import Signup from '../components/modal/Signup';
import { userLogin } from '../redux/actions/user.action';
import { useAppDispatch } from '../redux/redux.hook';

const Login = () => {
    const dispatch = useAppDispatch();
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const [registerIsOpen, setIsOpen] = useState(false);
    const [userLoginInfos, setUserLoginInfos] = useState({
        email: '',
        password: '',
    });

    const handleLoginIn = (e: FormEvent) => {
        e.preventDefault();
        if (!userLoginInfos.email || !userLoginInfos.password) {
            if (inputEmailRef.current && inputPasswordRef.current) {
                if (!userLoginInfos.email) return inputEmailRef.current.focus();
                if (!userLoginInfos.password) return inputPasswordRef.current.focus();
            }
        }
        dispatch(userLogin(userLoginInfos.email, userLoginInfos.password));
    };

    return (
        <>
            <Signup isOpen={registerIsOpen} setIsOpen={setIsOpen} />

            <div className="login">
                <div className="login__content">
                    <div className="login__content__presentation">
                        <h1>facebook</h1>
                        <h2>Avec Facebook, partagez et restez en contact avec votre entourage.</h2>
                    </div>
                    <form
                        className="login__content__form"
                        onSubmit={(e) => handleLoginIn(e)}
                        noValidate>
                        <div className="login__content__form__connexion">
                            <input
                                ref={inputEmailRef}
                                type="email"
                                placeholder="Adresse e-mail"
                                value={userLoginInfos.email}
                                onChange={(e) =>
                                    setUserLoginInfos({ ...userLoginInfos, email: e.target.value })
                                }
                            />
                            <input
                                ref={inputPasswordRef}
                                type="password"
                                placeholder="Mot de passe"
                                value={userLoginInfos.password}
                                onChange={(e) =>
                                    setUserLoginInfos({
                                        ...userLoginInfos,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <button className="login__content__form__connexion__btn-connexion">
                                Connexion
                            </button>
                            <span>Mot de passe oublié ?</span>
                        </div>
                        <button
                            className="login__content__form__btn-register"
                            type="button"
                            onClick={() => setIsOpen(true)}>
                            Créer un compte
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
