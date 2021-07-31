import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateDeveloperAvatarService from '@modules/developers/services/UpdateDeveloperAvatarService';

export default class ClientsAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateDeveloperAvatarService = container.resolve(
      UpdateDeveloperAvatarService,
    );

    const developer = await updateDeveloperAvatarService.execute({
      developer_id: request.query.id?.toString(),
      avatarFilename: request.file?.filename,
    });

    return response.json(classToClass(developer));
  }
}
