import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateDeveloperService from '@modules/developers/services/CreateDeveloperService';
import UpdateDeveloperService from '@modules/developers/services/UpdateDeveloperService';
import DeleteDeveloperService from '@modules/developers/services/DeleteDeveloperService';
import ListDeveloperService from '@modules/developers/services/ListDeveloperService';
import FindDeveloperService from '@modules/developers/services/FindDeveloperService';
import FindByNameDeveloperService from '@modules/developers/services/FindByNameDeveloperService';

export default class DeveloperController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, sex, age, hobby, birthdate } = request.body;

    const parsedBirthDate = parseISO(birthdate);

    const createDeveloperService = container.resolve(CreateDeveloperService);

    const developer = await createDeveloperService.execute({
      name,
      sex,
      age,
      hobby,
      birthdate: parsedBirthDate,
      avatar: 'gazin-teo.jpeg',
    });

    return response.json(classToClass(developer));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, sex, age, hobby, birthdate } = request.body;

    const updateDeveloperService = container.resolve(UpdateDeveloperService);

    const developerUpdate = await updateDeveloperService.execute({
      id: request.params.id as string,
      name,
      sex,
      age,
      hobby,
      birthdate,
    });

    return response.json(developerUpdate);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const id = request.params.id as string;

    const deleteDeveloperService = container.resolve(DeleteDeveloperService);

    const result = await deleteDeveloperService.execute(id);

    return response.json(result);
  }

  public async index(
    request: Request,
    response: Response,
  ): Promise<Response | undefined> {
    const name = request.query.name as string;

    if (name) {
      if (name.trim().length > 0) {
        const findByNameDeveloperService = container.resolve(
          FindByNameDeveloperService,
        );

        const developers = await findByNameDeveloperService.execute(name);

        return response.json(classToClass(developers));
      }
    } else {
      const listClientService = container.resolve(ListDeveloperService);

      const developers = await listClientService.execute();

      return response.json(classToClass(developers));
    }
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const id = request.params.id as string;

    const findDeveloperService = container.resolve(FindDeveloperService);

    const developer = await findDeveloperService.execute(id);

    return response.json(classToClass(developer));
  }
}
