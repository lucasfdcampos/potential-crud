import React, { useState, useEffect, FormEvent } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

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

interface Developer {
  id: string;
  name: string;
  sex: string;
  age: string;
  birthdate: string;
  hobby: string;
  created_at: string;
  avatar_url: string;
}

interface DeveloperParams {
  id: string;
}

const CreateDevelopers: React.FC = () => {
  const params = useParams<DeveloperParams>();
  const history = useHistory();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [hobby, setHobby] = useState('');

  const [developer, setDeveloper] = useState<Developer>();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!id) {
      await api.post('developers', {
        name,
        sex,
        age: Number(age),
        birthdate,
        hobby,
      });
    } else {
      await api.put(`developers/${params.id}`, {
        name,
        sex,
        age: Number(age),
        birthdate,
        hobby,
      });
    }

    history.push('/');
  }

  useEffect(() => {
    api.get<Developer>(`developers/${params.id}`).then(response => {
      setDeveloper(response.data);
      setId(response.data.id);
      setName(response.data.name);
      setSex(response.data.sex);
      setAge(response.data.age);

      const formattedBirthdate = format(
        parseISO(response.data.birthdate),
        'yyyy-MM-dd',
      );

      setBirthdate(formattedBirthdate);
      setHobby(response.data.hobby);
    });
  }, [params.id]);

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
