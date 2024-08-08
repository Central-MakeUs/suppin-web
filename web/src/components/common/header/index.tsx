import { ComponentProps, useEffect, useState } from 'react';
import { HeaderWrapper } from './header.styles';
import styled from 'styled-components';
import btnMypage from '@/assets/btn_mypage.png';
import { useNavigate } from 'react-router-dom';

type HeaderProps = ComponentProps<'header'>;

export const Header = ({ children }: HeaderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const moveMyPage = () => {
    navigate('/mypage');
  };

  return (
    <HeaderWrapper>
      {children}
      {isLoggedIn && (
        <MypageIcon src={btnMypage} alt="My Page" onClick={moveMyPage} />
      )}
    </HeaderWrapper>
  );
};

const MypageIcon = styled.img`
  width: 38px;
  cursor: pointer;
`;
