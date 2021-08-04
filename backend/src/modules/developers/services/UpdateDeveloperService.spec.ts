import AppError from '@shared/errors/AppError';

import FakeDeveloperRepository from '@modules/developers/repositories/fakes/FakeDevelopersRepository';
import CreateDeveloperService from './CreateDeveloperService';
import UpdateDeveloperService from './UpdateDeveloperService';

let fakeDeveloperRepository: FakeDeveloperRepository;
let createDeveloper: CreateDeveloperService;
let updateDeveloper: UpdateDeveloperService;

describe('UpdateDeveloper', () => {
  beforeEach(() => {
    fakeDeveloperRepository = new FakeDeveloperRepository();
    createDeveloper = new CreateDeveloperService(fakeDeveloperRepository);
    updateDeveloper = new UpdateDeveloperService(fakeDeveloperRepository);
  });

  it('should me able to update a developer', async () => {
    const developer = await createDeveloper.execute({
      name: 'dev',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
      avatar: 'gazin-teo.jpeg',
    });

    const updatedDeveloper = await updateDeveloper.execute({
      id: developer.id,
      name: 'dev update',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
    });

    expect(updatedDeveloper.name).toBe('dev update');
  });

  it('should not be able to update a developer from non-existing developer', async () => {
    await expect(
      updateDeveloper.execute({
        id: '1234567890',
        name: 'dev update',
        age: 29,
        sex: 'M',
        hobby: 'code',
        birthdate: new Date(),
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
