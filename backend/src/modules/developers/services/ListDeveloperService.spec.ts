import FakeDeveloperRepository from '@modules/developers/repositories/fakes/FakeDevelopersRepository';
import CreateDeveloperService from './CreateDeveloperService';
import ListDeveloperService from '@modules/developers/services/ListDeveloperService';

describe('ListDeveloper', () => {
  it('should be able to list all developers', async () => {
    const fakeDeveloperRepository = new FakeDeveloperRepository();
    const createDeveloper = new CreateDeveloperService(fakeDeveloperRepository);
    const listDeveloper = new ListDeveloperService(fakeDeveloperRepository);

    const developer1 = await createDeveloper.execute({
      name: 'dev1',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
      avatar: 'gazin-teo.jpeg',
    });

    const developer2 = await createDeveloper.execute({
      name: 'dev2',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
      avatar: 'gazin-teo.jpeg',
    });

    const developers = await listDeveloper.execute();

    expect(developers).toEqual(
      expect.arrayContaining([developer1, developer2]),
    );
  });
});
