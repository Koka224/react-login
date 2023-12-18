
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './AuthForm.css';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="auth-form">
            <h1>Log in to your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email:</label>
                <input className="email-input" {...register('email', { required: 'Обязательное поле' })} />
                {errors.email && <p className="error">{errors.email.message}</p>}

                <label>Пароль:</label>
                <div className="password-input">
                    <input
                        className="password-input"
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', { required: 'Обязательное поле' })}
                    />
                    <span  onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '◠' : '👁️'}
          </span>
                </div>
                {errors.password && <p className="error">{errors.password.message} </p>}
                <div className="remember-block">
                <input type="checkbox" {...register('remember')} />
                <span>Запомнить меня</span></div>

                <Link to="/register">Регистрация</Link>

                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default LoginForm;
