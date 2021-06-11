import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Signup from '../components/Modal/Signup';
import { userLogin } from '../redux/actions/user.action';
import { useAppDispatch } from '../redux/redux.hook';

// TODO Formik le register / login
// TODO Crée une fonction avec un toast custom error

const Login = () => {
    const dispatch = useAppDispatch();
    const [registerIsOpen, setIsOpen] = useState(false);
    const [userLoginInfos, setUserLoginInfos] = useState({
        email: '',
        password: '',
    });

    const handleLoginIn = (e: FormEvent) => {
        e.preventDefault();
        // toast.error("Une erreur s'est produite");
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
                                type="email"
                                placeholder="Adresse e-mail"
                                value={userLoginInfos.email}
                                onChange={(e) =>
                                    setUserLoginInfos({ ...userLoginInfos, email: e.target.value })
                                }
                            />
                            <input
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
