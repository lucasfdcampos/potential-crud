import AppError from '@shared/errors/AppError';

import FakeDeveloperRepository from '@modules/developers/repositories/fakes/FakeDevelopersRepository';
import CreateDeveloperService from './CreateDeveloperService';
import DeleteDeveloperService from './DeleteDeveloperService';

let fakeDeveloperRepository: FakeDeveloperRepository;
let createDeveloper: CreateDeveloperService;
let deleteDeveloper: DeleteDeveloperService;

describe('DeleteDeveloper', () => {
  beforeEach(() => {
    fakeDeveloperRepository = new FakeDeveloperRepository();
    createDeveloper = new CreateDeveloperService(fakeDeveloperRepository);
    deleteDeveloper = new DeleteDeveloperService(fakeDeveloperRepository);
  });

  it('should be able to delete a developer', async () => {
    const developer = await createDeveloper.execute({
      name: 'dev',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
      avatar: 'gazin-teo.jpeg',
    });

    const result = await deleteDeveloper.execute(developer.id);

    expect(result).toBe(0);
  });

  it('should not be able to delete a developer with an invalid id', async () => {
    await expect(deleteDeveloper.execute('1234567890')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
