import AppError from '@shared/errors/AppError';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeDeveloperRepository from '@modules/developers/repositories/fakes/FakeDevelopersRepository';
import UpdateDeveloperAvatarService from './UpdateDeveloperAvatarService';

let fakeStorageProvider: FakeStorageProvider;
let fakeDeveloperRepository: FakeDeveloperRepository;
let updateDeveloperAvatar: UpdateDeveloperAvatarService;

describe('UpdateDeveloperAvatar', () => {
  beforeEach(() => {
    fakeDeveloperRepository = new FakeDeveloperRepository();
    fakeStorageProvider = new FakeStorageProvider();

    updateDeveloperAvatar = new UpdateDeveloperAvatarService(
      fakeDeveloperRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to update an avatar', async () => {
    const developer = await fakeDeveloperRepository.create({
      name: 'dev',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
      avatar: 'user.jpeg',
    });

    await updateDeveloperAvatar.execute({
      developer_id: developer.id,
      avatarFilename: 'avatar.jpeg',
    });

    expect(developer.avatar).toBe('avatar.jpeg');
  });

  it('should not be able to update avatar with empty filename', async () => {
    const developer = await fakeDeveloperRepository.create({
      name: 'dev',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
      avatar: 'user.jpeg',
    });

    await expect(
      updateDeveloperAvatar.execute({ developer_id: developer.id }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update avatar with invalid developer', async () => {
    await expect(
      updateDeveloperAvatar.execute({ avatarFilename: 'avatar.jpeg' }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update avatar from non existing developer', async () => {
    await expect(
      updateDeveloperAvatar.execute({
        developer_id: 'non-existing-developer',
        avatarFilename: 'avatar.jpeg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete old avatar when updating a new one', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const developer = await fakeDeveloperRepository.create({
      name: 'dev',
      age: 29,
      sex: 'M',
      hobby: 'code',
      birthdate: new Date(),
      avatar: 'user.jpeg',
    });

    await updateDeveloperAvatar.execute({
      developer_id: developer.id,
      avatarFilename: 'avatar.jpeg',
    });

    await updateDeveloperAvatar.execute({
      developer_id: developer.id,
      avatarFilename: 'avatar2.jpeg',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatar.jpeg');
    expect(developer.avatar).toBe('avatar2.jpeg');
  });
});
