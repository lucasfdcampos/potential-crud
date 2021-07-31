import path from 'path';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';
import AppError from '@shared/errors/AppError';

import Developer from '@modules/developers/infra/typeorm/entities/Developer';
import uploadConfig from '@config/upload';

interface IRequest {
  developer_id?: string;
  avatarFilename?: string;
}

@injectable()
class UpdateDeveloperAvatarService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
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
      const developerAvatarFilePath = path.join(
        uploadConfig.directory,
        developer.avatar,
      );

      // File system
      const developerAvatarFileExists = await fs.promises.stat(
        developerAvatarFilePath,
      );
      console.log(developerAvatarFileExists);

      if (developerAvatarFileExists) {
        await fs.promises.unlink(developerAvatarFilePath);
      }
    }

    developer.avatar = avatarFilename;

    await this.developersRepository.save(developer);

    return developer;
  }
}

export default UpdateDeveloperAvatarService;
