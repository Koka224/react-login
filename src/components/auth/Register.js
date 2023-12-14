
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './AuthForm.css';

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="auth-form">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>ФИО:</label>
                <input {...register('fullName', { required: 'Обязательное поле' })} />
                {errors.fullName && <p className="error">{errors.fullName.message}</p>}
                <label>Email:</label>
                <input {...register('email', { required: 'Обязательное поле' })} />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <label>Пароль:</label>
                <div className="password-input">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', { required: 'Обязательное поле' })}
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
          </span>
                </div>
                {errors.password && <p className="error">{errors.password.message} </p>}

                <label>Подтверждение пароля:</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('confirmPassword', { required: 'Обязательное поле' })}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}



                <input type="checkbox" {...register('agree', { required: 'Необходимо ознакомиться с правилами' })} />
                <span>Ознакомлен с правилами</span>

                <Link to="/">Логин</Link>

                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default RegisterForm;
