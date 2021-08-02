import React, { useState, useEffect, useCallback } from 'react';
import { FiCalendar, FiPlus, FiSearch } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';

import { Link } from 'react-router-dom';
import api from '../../services/api';

import {
  Container,
  Wrapper,
  Content,
  Main,
  List,
  Title,
  SearchBox,
  Input,
  ButtonSearch,
  ButtonCreate,
  DeveloperCard,
  DeveloperDate,
  DeveloperIdentication,
  DeveloperName,
  DeveloperAction,
  DeveloperBio,
  Avatar,
} from './styles';

import Navbar from '../../components/Navbar';

interface Developer {
  id: string;
  name: string;
  sex: string;
  age: number;
  birthdate: string;
  hobby: string;
  created_at: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [name, setName] = useState('');

  async function loadDevelopers() {
    api.get<Developer[]>('/developers').then(response => {
      const developerFormatted = response.data.map(developer => {
        return {
          ...developer,
          created_at: format(parseISO(developer.created_at), 'd MMM yy'),
          birthdate: format(parseISO(developer.birthdate), 'dd/MM/yyyy'),
        };
      });
      setDevelopers(developerFormatted);
    });
  }

  const handleDeleteDeveloper = useCallback(async (id: string) => {
    await api.delete(`developers/${id}`);
    loadDevelopers();
  }, []);

  async function handleSearch() {
    if (name.length > 0) {
      await api
        .get<Developer[]>('/developers', { params: { name } })
        .then(response => {
          const developerFormatted = response.data.map(developer => {
            return {
              ...developer,
              created_at: format(parseISO(developer.created_at), 'd MMM yy'),
              birthdate: format(parseISO(developer.birthdate), 'dd/MM/yyyy'),
            };
          });
          setDevelopers(developerFormatted);
        });
    } else {
      loadDevelopers();
    }
  }

  useEffect(() => {
    loadDevelopers();
  }, []);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Content>
          <Main>
            <List>
              <Title>
                <h2>Developers</h2>

                <div>
                  <SearchBox>
                    <Input
                      type="text"
                      id="name"
                      autoComplete="off"
                      value={name}
                      placeholder="Pesquise o Nome"
                      onChange={event => setName(event.target.value)}
                    />
                    <ButtonSearch type="button" onClick={handleSearch}>
                      <FiSearch />
                    </ButtonSearch>
                  </SearchBox>
                  <Link to="/developers/create">
                    <ButtonCreate type="button">
                      <FiPlus />
                      <p>ADICIONAR</p>
                    </ButtonCreate>
                  </Link>
                </div>
              </Title>

              {developers.map(developer => (
                <DeveloperCard key={developer.id}>
                  <DeveloperDate>
                    <p>{developer.created_at}</p>
                  </DeveloperDate>

                  <DeveloperIdentication>
                    <Link to={`/developers/${developer.id}`}>
                      <Avatar>
                        <img src={developer.avatar_url} alt={developer.name} />
                      </Avatar>
                      <svg className="half-circle" viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
                      </svg>
                    </Link>

                    <Link to={`/developers/${developer.id}`}>
                      <DeveloperName>
                        <span className="title">{developer.name}</span>
                        <p>
                          {developer.sex === 'M' ? 'Masculino' : 'Feminino'}
                        </p>
                      </DeveloperName>
                    </Link>
                  </DeveloperIdentication>

                  <DeveloperBio>
                    <div className="calendar">
                      <FiCalendar />
                      <span>{developer.birthdate}</span>
                      <p>{developer.age} anos</p>
                    </div>
                    <p>{developer.hobby}</p>
                  </DeveloperBio>
                  {/*
                  <DeveloperStatus situation="ativo">
                    <div>
                      <span>Ativo</span>
                      <span>Inativo</span>
                    </div>
                  </DeveloperStatus>
                  */}

                  <DeveloperAction>
                    <button
                      type="button"
                      onClick={() => handleDeleteDeveloper(developer.id)}
                    >
                      <svg
                        className="coverHead"
                        width="28"
                        height="7"
                        viewBox="0 0 32 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M30.8571 2.33334H22.2857L21.6143 0.969803C21.4721 0.678293 21.253 0.433081 20.9817 0.261753C20.7104 0.0904251 20.3976 -0.000220789 20.0786 1.27843e-05H11.9143C11.596 -0.00123632 11.2838 0.0890716 11.0134 0.26059C10.7431 0.432108 10.5255 0.677899 10.3857 0.969803L9.71429 2.33334H1.14286C0.839753 2.33334 0.549062 2.45626 0.334735 2.67505C0.120408 2.89384 0 3.19059 0 3.50001L0 5.83334C0 6.14275 0.120408 6.4395 0.334735 6.65829C0.549062 6.87708 0.839753 7 1.14286 7H30.8571C31.1602 7 31.4509 6.87708 31.6653 6.65829C31.8796 6.4395 32 6.14275 32 5.83334V3.50001C32 3.19059 31.8796 2.89384 31.6653 2.67505C31.4509 2.45626 31.1602 2.33334 30.8571 2.33334Z" />
                      </svg>
                      <svg
                        width="32"
                        height="24"
                        viewBox="0 0 29 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.286133 24.75C0.286133 25.6783 0.654882 26.5685 1.31126 27.2249C1.96764 27.8813 2.85788 28.25 3.78613 28.25H24.7861C25.7144 28.25 26.6046 27.8813 27.261 27.2249C27.9174 26.5685 28.2861 25.6783 28.2861 24.75V0.25H0.286133V24.75ZM20.1195 6.08333C20.1195 5.77391 20.2424 5.47717 20.4612 5.25838C20.68 5.03958 20.9767 4.91667 21.2861 4.91667C21.5956 4.91667 21.8923 5.03958 22.1111 5.25838C22.3299 5.47717 22.4528 5.77391 22.4528 6.08333V22.4167C22.4528 22.7261 22.3299 23.0228 22.1111 23.2416C21.8923 23.4604 21.5956 23.5833 21.2861 23.5833C20.9767 23.5833 20.68 23.4604 20.4612 23.2416C20.2424 23.0228 20.1195 22.7261 20.1195 22.4167V6.08333ZM13.1195 6.08333C13.1195 5.77391 13.2424 5.47717 13.4612 5.25838C13.68 5.03958 13.9767 4.91667 14.2861 4.91667C14.5956 4.91667 14.8923 5.03958 15.1111 5.25838C15.3299 5.47717 15.4528 5.77391 15.4528 6.08333V22.4167C15.4528 22.7261 15.3299 23.0228 15.1111 23.2416C14.8923 23.4604 14.5956 23.5833 14.2861 23.5833C13.9767 23.5833 13.68 23.4604 13.4612 23.2416C13.2424 23.0228 13.1195 22.7261 13.1195 22.4167V6.08333ZM6.11947 6.08333C6.11947 5.77391 6.24238 5.47717 6.46117 5.25838C6.67997 5.03958 6.97671 4.91667 7.28613 4.91667C7.59555 4.91667 7.8923 5.03958 8.11109 5.25838C8.32988 5.47717 8.4528 5.77391 8.4528 6.08333V22.4167C8.4528 22.7261 8.32988 23.0228 8.11109 23.2416C7.8923 23.4604 7.59555 23.5833 7.28613 23.5833C6.97671 23.5833 6.67997 23.4604 6.46117 23.2416C6.24238 23.0228 6.11947 22.7261 6.11947 22.4167V6.08333Z" />
                      </svg>
                    </button>
                  </DeveloperAction>
                </DeveloperCard>
              ))}
            </List>
          </Main>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
