import AppError from '@shared/errors/AppError';

import FakeDeveloperRepository from '@modules/developers/repositories/fakes/FakeDevelopersRepository';
import CreateDeveloperService from './CreateDeveloperService';
import FindDeveloperService from './FindDeveloperService';

let fakeDeveloperRepository: FakeDeveloperRepository;
let createDeveloper: CreateDeveloperService;
let findDeveloper: FindDeveloperService;

describe('ListDeveloper', () => {
  beforeEach(() => {
    fakeDeveloperRepository = new FakeDeveloperRepository();
    createDeveloper = new CreateDeveloperService(fakeDeveloperRepository);
    findDeveloper = new FindDeveloperService(fakeDeveloperRepository);
  });

  it('should be able to list a developer by id', async () => {
    const developer = await createDeveloper.execute({
      name: 'dev',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
      avatar: 'user.jpeg',
    });

    const result = await findDeveloper.execute(developer.id);

    expect(result).toEqual(developer);
  });

  it('should not be able to list a developer with an invalid id', async () => {
    await expect(findDeveloper.execute('1234567890')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
