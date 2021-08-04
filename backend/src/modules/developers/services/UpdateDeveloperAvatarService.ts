import path from 'path';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';
import AppError from '@shared/errors/AppError';

import Developer from '@modules/developers/infra/typeorm/entities/Developer';
import uploadConfig from '@config/upload';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

interface IRequest {
  developer_id?: string;
  avatarFilename?: string;
}

@injectable()
class UpdateDeveloperAvatarService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    developer_id,
    avatarFilename,
  }: IRequest): Promise<Developer> {
    if (!avatarFilename) {
      throw new AppError('Invalid or empty file.');
    }

    if (!developer_id) {
      throw new AppError('Invalid developer.');
    }

    const developer = await this.developersRepository.findById(developer_id);

    if (!developer) {
      throw new AppError('Invalid developer.');
    }

    // Deleta avatar
    if (developer.avatar) {
      await this.storageProvider.deleteFile(developer.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFilename);

    developer.avatar = filename;

    await this.developersRepository.save(developer);

    return developer;
  }
}

export default UpdateDeveloperAvatarService;
