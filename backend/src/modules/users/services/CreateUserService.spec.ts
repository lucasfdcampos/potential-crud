import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'user',
      email: 'user@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user if the email already exists', async () => {
    await createUser.execute({
      name: 'user',
      email: 'user@example.com',
      password: '123456',
    });

    await expect(
      createUser.execute({
        name: 'user',
        email: 'user@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
