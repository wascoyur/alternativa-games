import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logout from '../redux/userActions';
import SearchBox from './SearchBox';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
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
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}

            <Nav className='ml-auto' style={{ marginLeft: 'auto' }}>
              {/* <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>
                  Корзина
                </Nav.Link>
              </LinkContainer> */}

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
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Администратор' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Пользователи</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Товары</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Сделки</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
