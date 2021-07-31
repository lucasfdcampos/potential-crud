import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import AppError from '../errors/AppError';

import Developer from '../models/Developer';
import uploadConfig from '../config/upload';

interface IRequest {
  developer_id?: string;
  avatarFilename?: string;
}

class UpdateDeveloperAvatarService {
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

    const developersRepository = getRepository(Developer);

    const developer = await developersRepository.findOne(developer_id);

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

    await developersRepository.save(developer);

    return developer;
  }
}

export default UpdateDeveloperAvatarService;
