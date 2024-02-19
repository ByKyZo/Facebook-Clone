import React, { useState } from 'react';
import Modal from '../../utils/Modal';
import { RiCloseLine } from 'react-icons/ri';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../../../config/axios';
import { toastCatchError, toastSuccess } from '../../../utils/utils';

interface IProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
}

// TODO Focus le premier input vides si le user essayer de créer un compte
// TODO Gerer les messages d'erreurs avec des popups
// TODO Rajouter les années automatiquement dans le select
// TODO Gerer le formik des select

const Signup = ({ isOpen, setIsOpen }: IProps) => {
    const [isEmailAlreadyExist, setIsEmailAlreadyExist] = useState(false);

    const returnOptionsAllDayInNumber = () => {
        const options: JSX.Element[] = [];
        for (let i = 1; i <= 31; i++) {
            options.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return options;
    };

    const isFieldErrorBorder = (fieldName: any) => {
        return (
            // @ts-ignore
            userSignup.touched[fieldName] &&
            // @ts-ignore
            userSignup.errors[fieldName] && { border: '1px solid red' }
        );
    };

    const isFieldError = (fieldName: any) => {
        return (
            // @ts-ignore
            userSignup.touched[fieldName] &&
            // @ts-ignore
            userSignup.errors[fieldName] && <span>{userSignup.errors[fieldName]}</span>
        );
    };

    const userSignup = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            day: '',
            month: '',
            year: '',
            gender: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('Required')
                .min(4, 'First name should have 4 characters minimum')
                .max(12, 'First name should have 12 characters maximum'),
            lastName: Yup.string()
                .required('Required')
                .min(4, 'Last name should have 4 characters minimum')
                .max(12, 'Last name should have 12 characters maximum'),
            email: Yup.string()
                .required('Email address is required')
                .email('Invalid email address'),
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password should have 6 characters minimum'),

            day: Yup.string().required(),
            month: Yup.string().required(),
            year: Yup.string().required(),
            gender: Yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            const dayFormat = parseInt(values.day) < 10 ? `0${values.day}` : values.day;
            const monthFormat = parseInt(values.month) < 10 ? `0${values.month}` : values.month;
            const birthdayFormat = `${dayFormat}/${monthFormat}/${values.year}`;
            const user = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                birthday: {
                    day: values.day,
                    month: values.month,
                    year: values.year,
                    format: birthdayFormat,
                },
                gender: values.gender,
            };

            axios
                .post('/auth/signup', user)
                .then((res) => {
                    console.log(res);
                    setIsEmailAlreadyExist(false);
                    toastSuccess('Sign Up Successful');
                    resetForm({});
                    setTimeout(() => {
                        setIsOpen(false);
                    }, 300);
                })
                .catch((err) => {
                    if (err.response.status === 409) {
                        console.log('Email already exist');
                        return setIsEmailAlreadyExist(true);
                    }
                    toastCatchError();
                });
        },
    });

    return (
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} className="signup-modal">
            <div className="signup-modal__head">
                <button className="signup-modal__head__btn-close" onClick={() => setIsOpen(false)}>
                    <RiCloseLine />
                </button>
                <span className="signup-modal__head__title">S’inscrire</span>
                <span className="signup-modal__head__label">C’est rapide et facile.</span>
            </div>
            <form className="signup-modal__form" onSubmit={userSignup.handleSubmit} noValidate>
                <div className="signup-modal__form__names">
                    <input
                        {...userSignup.getFieldProps('firstName')}
                        style={isFieldErrorBorder('firstName')}
                        type="text"
                        placeholder="Prénom"
                        className="signup-modal__form__input signup-modal__form__input--name"
                    />
                    <input
                        {...userSignup.getFieldProps('lastName')}
                        style={isFieldErrorBorder('lastName')}
                        type="text"
                        placeholder="Nom de famille"
                        className="signup-modal__form__input"
                    />
                </div>
                <input
                    {...userSignup.getFieldProps('email')}
                    style={isFieldErrorBorder('email')}
                    type="email"
                    placeholder="Adresse e-mail"
                    className="signup-modal__form__input"
                />
                {isEmailAlreadyExist && <span>Email already exist</span>}
                <input
                    {...userSignup.getFieldProps('password')}
                    style={isFieldErrorBorder('password')}
                    type="password"
                    placeholder="Nouveau mot de passe"
                    className="signup-modal__form__input"
                />
                <div className="signup-modal__form__birthday">
                    <span className="signup-modal__form__label">Date de naissance</span>
                    <div className="signup-modal__form__birthday__wrapper">
                        <select
                            {...userSignup.getFieldProps('day')}
                            style={isFieldErrorBorder('day')}
                            className="signup-modal__form__select">
                            <option value="0">Jours</option>
                            {returnOptionsAllDayInNumber()}
                        </select>
                        <select
                            {...userSignup.getFieldProps('month')}
                            style={isFieldErrorBorder('month')}
                            className="signup-modal__form__select">
                            <option value="0">Mois</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                        <select
                            {...userSignup.getFieldProps('year')}
                            style={isFieldErrorBorder('year')}
                            className="signup-modal__form__select">
                            <option value="0">Années</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>
                    </div>
                </div>
                <div className="signup-modal__form__gender">
                    <span className="signup-modal__form__label">Genre</span>
                    <div className="signup-modal__form__gender__wrapper">
                        <div
                            style={isFieldErrorBorder('gender')}
                            className="signup-modal__form__gender__input">
                            <label htmlFor="gender-female">Femme</label>
                            <input
                                {...userSignup.getFieldProps('gender')}
                                id="gender-female"
                                name="gender"
                                type="radio"
                                value="1"
                            />
                        </div>
                        <div
                            style={isFieldErrorBorder('gender')}
                            className="signup-modal__form__gender__input">
                            <label htmlFor="gender-male">Homme</label>
                            <input
                                {...userSignup.getFieldProps('gender')}
                                id="gender-male"
                                name="gender"
                                type="radio"
                                value="2"
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="signup-modal__form__btn-submit">
                    S'inscrire
                </button>
            </form>
        </Modal>
    );
};

export default Signup;
