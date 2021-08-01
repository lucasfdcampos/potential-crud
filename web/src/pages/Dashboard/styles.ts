import styled, { css } from 'styled-components';
import { lighten, shade } from 'polished';

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
  width: 100%;

  h1,
  h2 {
    position: relative;
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const List = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: #202024;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 16px;
    margin-top: -10px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 1.333em;

  height: 100%;
`;

export const ButtonCreate = styled.button`
  background: #ff9d2e;
  border: 2px solid #ff9d2e;
  border-radius: 6px;
  width: 174px;
  height: 54px;
  color: #fff;
  outline: 0;
  padding: 0 16px;
  letter-spacing: 0.1px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;

  &:hover {
    background: transparent;
    color: #ff9d2e;
  }

  &:active {
    background: ${shade(0.2, '#ff9d2e')};
    color: #202024;
  }
`;

export const DeveloperCard = styled.article`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  gap: 3rem;

  height: 120px;
  width: 100%;

  padding: 1.5rem 2rem 1.5rem 1.5rem;

  border-radius: 5px;
  margin-top: 4px;
  background-color: ${shade(0.05, '#29292e')};

  border: 0.3rem solid ${shade(0.05, '#29292e')};
  border-bottom: 1px solid #121214;
  border-top: 1px solid ${shade(0.1, '#29292e')};

  transition: all 0.3s ease-in-out 0s;

  &:hover,
  &:active {
    background-color: ${lighten(0.06, '#202024')};
    border-left-color: #5a61fd;
    border-right: 0.3rem solid ${lighten(0.06, '#202024')};
  }

  &:hover .half-circle {
    transform: rotate(0deg);
    animation: 1s ease-in-out 0s 1 normal forwards running rotate;
    stroke: #f69b2c;
  }

  &:hover img {
    filter: none;
    transform: scale(1.1);
  }

  &:hover .title {
    background: linear-gradient(90deg, #348df3 0%, #5b61fd 100%);
    text-shadow: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1120px) {
    flex-direction: column;
    justify-content: space-between;
    height: 220px;
    gap: 0rem;

    &:hover,
    &:active {
      border-bottom: 1px solid #121214;
      border-top: 1px solid ${shade(0.1, '#29292e')};
      border-left-color: ${lighten(0.06, '#202024')};
    }
  }
`;

export const DeveloperDate = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;

  p {
    font-size: 14px;
    letter-spacing: 1px;
    color: #737380;
  }
`;

export const DeveloperIdentication = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding-top: 2rem;

  .half-circle {
    position: absolute;
    bottom: 0;
    top: 60px;
    left: 10;
    width: 60px;
    height: 48px;
    fill: none;
    stroke: #202024;
    stroke-width: 7;
    stroke-linecap: round;
    pointer-events: none;

    transform-origin: 50% 50%;
    stroke-dasharray: 565.487, 565.487;
    stroke-dashoffset: 0;
  }

  @keyframes rotate {
    0% {
      stroke-dashoffset: 565.487;
    }
  }

  @media (max-width: 1120px) {
    gap: 2rem;
    padding-top: 1rem;

    .half-circle {
      top: 56px;
    }
  }
`;

export const DeveloperName = styled.div`
  span {
    font-size: 20px;
    color: #fff;
    transition: 1s all ease 0s;

    @media (max-width: 360px) {
      font-size: 16px;
    }
  }

  p {
    margin-top: 0.2rem;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: #a8a8b3;

    @media (max-width: 360px) {
      font-size: 14px;
    }
  }
`;

interface SituationProps {
  situation?: string;
}

export const DeveloperBio = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;

  padding-top: 2rem;
  gap: 4rem;

  .calendar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    svg {
      width: 1.6rem;
      height: 1.6rem;
      stroke: #a8a8b3;
    }

    span {
      font-size: 14px;
      color: #737380;
    }

    p {
      font-weight: normal;
      font-size: 14px;
      color: #666360;
    }
  }

  p {
    font-weight: bold;
    font-size: 14px;
    color: #a8a8b3;
  }

  @media (max-width: 1120px) {
    flex-direction: column;
    gap: 1rem;
    padding-top: 0rem;
  }
`;

export const DeveloperStatus = styled.div<SituationProps>`
  padding-top: 2rem;
  text-align: center;

  div {
    font-size: 16px;
    display: flex;
    align-items: center;

    span {
      color: #45454d;
      display: flex;
      align-items: center;
    }

    &:first-child {
      ${props =>
        props.situation === 'ativo' &&
        css`
          span:first-child {
            color: #fff;
          }
        `}
    }

    &:last-child {
      ${props =>
        props.situation === 'inativo' &&
        css`
          span:last-child {
            color: #fff;
          }
        `}
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 15px;
      background: #737380;
      margin: 0 8px;
    }
  }

  @media (max-width: 1120px) {
    padding-top: 0rem;
  }
`;

export const Avatar = styled.div`
  img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    filter: grayscale(100%);
    overflow: hidden;
    margin: 16px 10px;
    transition: all 0.3s ease-in-out 0s;
  }
`;
