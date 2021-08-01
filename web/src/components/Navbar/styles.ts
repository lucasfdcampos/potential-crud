import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 72px;
  padding: 0px 30px;
  background: #202024;
  z-index: 9998;
  opacity: 1;
  box-shadow: #121214 0px 1rem 2rem;

  transform: translateY(0px);
  visibility: visible;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0px 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  max-width: 1366px;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 12px 0px;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    img {
      position: relative;
      width: 160px;
      height: 42px;
      overflow: hidden;
    }
  }

  @media (max-width: 470px) {
    img {
      position: relative;
      width: 140px;
      height: 32px;
      overflow: hidden;
    }
  }
`;

export const MenuRight = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  z-index: 2;
`;
