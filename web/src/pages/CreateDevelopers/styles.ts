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

  & .Select__control {
    background-color: #121214;
    box-shadow: 0 0 0 0px #121214;
    border-radius: 5px;
    border: 2px solid #121214;

    width: 100%;
    height: 50px;

    transition: border-color 0.3s ease-in-out 0s, color 0.3s ease-in-out 0s;

    &:hover,
    &:active,
    &:focus {
      border-color: #ff9d2e;
    }

    &:hover {
      & .Select__clear-indicator {
        visibility: visible;
      }

      & .Select__indicator svg {
        color: #ff9d2e;
      }
    }

    & .Select__placeholder {
      font-size: 16px;
      color: #666360;
    }

    & .Select__single-value {
      font-size: 16px;
      color: #e1e1e6;
    }

    & .Select__indicator-separator {
      background-color: #29292e;
    }

    & .Select__indicator {
      transition: color 0.3s ease-in-out 0s;
      color: #29292e;

      &:hover {
        color: #ff9d2e;
      }

      &:active {
        color: #ff9d2e;
      }
    }
  }

  & .Select__control--menu-is-open {
    border-color: #ff9d2e;

    .Select__indicator svg {
      color: #ff9d2e;
    }
  }

  & .Select__value-container {
    padding: 2px 8px;
  }

  & .Select__menu {
    background-color: #29292e;
    border-radius: 5px;
    border: 2px solid #29292e;
    box-shadow: #00000099 0px 5px 20px;

    font-size: 16px;
    animation: fadeIn 0.3s ease-in-out;

    & .Select__option {
      color: #45454d;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #e1e1e6;
        background-color: #666360;
      }

      &:active {
        background-color: #ff9d2e;
      }
    }

    & .Select__option--is-selected {
      color: #fff;
      background-color: #ff9d2e;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #a8a8b3;
  padding: 15px 10px 15px 0px;
`;

export const Input = styled.input`
  background: #121214;
  border-radius: 5px;
  border: 0;
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
