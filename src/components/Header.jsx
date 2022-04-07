import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import { Route } from 'react-router-dom';

const Header = () => {
  //   const dispatch = useDispatch();
  //   const userLogin = useSelector((state) => state.userLogin);
  //
  // const { userInfo } = userLogin;
  const userInfo = null;

  const logoutHandler = () => {
    // dispatch({});
  };
  return (
    <header>
      <Navbar bg='dark' expand='sm' variant='dark' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>wascoyur Blog</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <SearchBox />

            <Nav className='ml-auto' style={{ marginLeft: 'auto' }}>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Профиль</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Выход
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i>Вход
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
