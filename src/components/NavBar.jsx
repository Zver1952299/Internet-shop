import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer( () => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="success" variant="dark">
        <Container>
            <NavLink style={{color: 'white', fontSize: '24px', width: '250px'}} to={SHOP_ROUTE}>AliDorado</NavLink>
            {user.isAuth ? 
                <Nav className="ml-auto">
                    <Button variant={"outline-light"}>Админ панель</Button>
                    <Button className="ms-4" variant={"outline-light"}>Выйти</Button>
                </Nav> : 
                <Nav className="ml-auto">
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
        </Container>
        </Navbar>
    );
}); 

export default NavBar;