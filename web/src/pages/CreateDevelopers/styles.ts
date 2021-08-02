import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 72px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1180px;
  margin: 20px auto 10px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media (max-width: 940px) {
    display: block;
  }

  @media (max-width: 768px) {
    padding: 0px 20px;
    margin-bottom: 40px;
  }
`;

export const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: #202024;
  border-radius: 5px;

  h2 {
    position: relative;
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  form {
    margin-top: 1rem;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 0.5rem;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #fff;
  padding: 15px 10px 15px 0px;
`;

export const Input = styled.input`
  background: #121214;
  border-radius: 5px;
  border: 1px solid #0b0b0d;
  height: 42px;
  outline: 0px;
  font-size: 18px;
  padding: 12px;
  color: #e1e1e6;

  &::placeholder {
    color: #666360;
  }

  &:focus {
    border-color: #737380;
  }
`;

export const ButtonSave = styled.button`
  margin-top: 2rem;

  background: #ff9d2e;
  border: 2px solid #ff9d2e;
  border-radius: 6px;
  width: 174px;
  height: 54px;
  color: #fff;
  outline: 0;
  padding: 0 16px;
  letter-spacing: 0.5px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;

  &:hover {
    background: transparent;
    color: #ff9d2e;
  }

  &:active {
    background: ${shade(0.5, '#ff9d2e')};
    border: 2px solid ${shade(0.2, '#ff9d2e')};
    color: #202024;
  }
`;
