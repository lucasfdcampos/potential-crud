import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import api from '../../services/api';

import {
  Container,
  Wrapper,
  Content,
  Main,
  InputBlock,
  Label,
  Input,
  ButtonSave,
} from './styles';

const CreateDevelopers: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [hobby, setHobby] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post('developers', {
      name,
      sex,
      age,
      birthdate,
      hobby,
    });

    history.push('/');
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Content>
          <Main>
            <h2>Novo Developer</h2>
            <form onSubmit={handleSubmit}>
              <InputBlock>
                <Label htmlFor="name">Nome</Label>
                <Input
                  type="text"
                  id="name"
                  autoComplete="off"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </InputBlock>
              <InputBlock>
                <Label htmlFor="sex">Sexo</Label>
                <Input
                  type="text"
                  id="sex"
                  autoComplete="off"
                  value={sex}
                  onChange={event => setSex(event.target.value)}
                />
              </InputBlock>
              <InputBlock>
                <Label htmlFor="age">Idade</Label>
                <Input
                  type="text"
                  id="age"
                  autoComplete="off"
                  value={age}
                  onChange={event => setAge(event.target.value)}
                />
              </InputBlock>
              <InputBlock>
                <Label htmlFor="birthdate">Data Nascimento</Label>
                <Input
                  type="text"
                  id="birthdate"
                  autoComplete="off"
                  value={birthdate}
                  onChange={event => setBirthdate(event.target.value)}
                />
              </InputBlock>
              <InputBlock>
                <Label htmlFor="hobby">Hobby</Label>
                <Input
                  type="text"
                  id="hobby"
                  autoComplete="off"
                  value={hobby}
                  onChange={event => setHobby(event.target.value)}
                />
              </InputBlock>
              <ButtonSave type="submit">SALVAR</ButtonSave>
            </form>
          </Main>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default CreateDevelopers;
