import { useNavigate } from 'react-router';

import * as S from './style.js';
import LogoSvg from '../../assets/images/logo.svg';
import CartIcon from '../../assets/images/icon-cart.svg';
import UserAvatar from '../../assets/images/image-avatar.png';

export default function Header() {
  const navigate = useNavigate();
  return (
    <S.NavBar>
      <S.Logo src={LogoSvg} />
      <S.Links>
        <li>Collections</li>
        <li>
          <a onClick={() => navigate('/men')}>Men</a>
        </li>
        <li>
          <a onClick={() => navigate('/women')}>Women</a>
        </li>
        <li>About</li>
        <li>Contact</li>
      </S.Links>
      <S.UserInfo>
        <S.CartIcon src={CartIcon} alt="cart Icon" />
        <S.Avatar src={UserAvatar} alt="User Avatar" />
      </S.UserInfo>
    </S.NavBar>
  );
}
