import FakeDeveloperRepository from '@modules/developers/repositories/fakes/FakeDevelopersRepository';
import CreateDeveloperService from './CreateDeveloperService';
import FindByNameDeveloperService from './FindByNameDeveloperService';

describe('ListDeveloper', () => {
  it('should be able to list developers by name', async () => {
    const fakeDeveloperRepository = new FakeDeveloperRepository();
    const createDeveloper = new CreateDeveloperService(fakeDeveloperRepository);
    const findByName = new FindByNameDeveloperService(fakeDeveloperRepository);

    const developer = await createDeveloper.execute({
      name: 'dev',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
      avatar: 'user.jpeg',
    });

    const developers = await findByName.execute(developer.name);

    expect(developers).toEqual(expect.arrayContaining([developer]));
  });
});
