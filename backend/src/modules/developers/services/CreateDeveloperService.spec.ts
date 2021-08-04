import FakeDeveloperRepository from '@modules/developers/repositories/fakes/FakeDevelopersRepository';
import CreateDeveloperService from './CreateDeveloperService';

describe('CreateDeveloper', () => {
  it('should be able to create a new developer', async () => {
    const fakeDeveloperRepository = new FakeDeveloperRepository();
    const createDeveloper = new CreateDeveloperService(fakeDeveloperRepository);

    const developer = await createDeveloper.execute({
      name: 'dev',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
      avatar: 'gazin-teo.jpeg',
    });

    expect(developer).toHaveProperty('id');
  });
});
