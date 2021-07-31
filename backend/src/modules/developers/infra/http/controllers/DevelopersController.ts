import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateDeveloperService from '@modules/developers/services/CreateDeveloperService';
import ListDeveloperService from '@modules/developers/services/ListDeveloperService';

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
    });

    return response.json(developer);
  }
  public async index(request: Request, response: Response): Promise<Response> {
    const listClientService = container.resolve(ListDeveloperService);

    const developers = await listClientService.execute();

    return response.json(developers);
  }
}
