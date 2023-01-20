import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 69.375rem;
  height: 3.125rem;
  margin: 0 auto;
`;

export const Logo = styled.img`
  flex: 1;
  align-self: center;
  width: 8.59375rem;
  height: 1.25rem;
`;

export const Links = styled.ul`
  flex: 5;
  display: flex;
  flex-direction: row;

  * + * {
    margin-left: 2rem;
  }

  li {
    list-style: none;
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  * + * {
    margin-left: 2.9375rem;
  }
`;

export const CartIcon = styled.img`
  width: 1.375rem;
  height: 1.25rem;
`;

export const Avatar = styled.img`
  width: 3.125rem;
  height: 3.125rem;
`;
