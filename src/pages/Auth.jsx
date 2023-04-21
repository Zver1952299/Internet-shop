import React from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}>
            <Card className='p-5' style={{width: 600}}>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-4'
                        placeholder='Введите ваш email...'
                    />
                    <Form.Control
                        className='mt-4'
                        placeholder='Введите ваш пароль...'
                    />
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        {isLogin ?
                            <div>
                                Нет аккауна? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div> :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button variant={'success'}>
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;