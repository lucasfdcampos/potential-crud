import React, { useState, useEffect } from 'react';
import { FiCalendar } from 'react-icons/fi';
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
  ButtonCreate,
  DeveloperCard,
  DeveloperDate,
  DeveloperIdentication,
  DeveloperName,
  DeveloperStatus,
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

  useEffect(() => {
    api.get<Developer[]>('/developers').then(response => {
      const developerFormatted = response.data.map(developer => {
        return {
          ...developer,
          created_at: format(parseISO(developer.created_at), 'd MMM yy'),
          birthdate: format(parseISO(developer.birthdate), 'dd/MM/yyyy'),
        };
      });
      console.log(developerFormatted);
      setDevelopers(developerFormatted);
    });
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
                <Link to="/developers/create">
                  <ButtonCreate type="button">ADICIONAR</ButtonCreate>
                </Link>
              </Title>

              {developers.map(developer => (
                <DeveloperCard>
                  <DeveloperDate>
                    <p>{developer.created_at}</p>
                  </DeveloperDate>

                  <DeveloperIdentication>
                    <Link to="/developers/1">
                      <Avatar>
                        <img src={developer.avatar_url} alt={developer.name} />
                      </Avatar>
                      <svg className="half-circle" viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
                      </svg>
                    </Link>

                    <Link to="/developers/1">
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

                  <DeveloperStatus situation="ativo">
                    <div>
                      <span>Ativo</span>
                      <span>Inativo</span>
                    </div>
                  </DeveloperStatus>
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
