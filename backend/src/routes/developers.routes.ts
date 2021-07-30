import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import DevelopersRepository from '../repositories/DevelopersRepository';
import CreateDeveloperService from '../services/CreateDeveloperService';

const developersRouter = Router();

developersRouter.get('/', async (request, response) => {
  const developersRepository = getCustomRepository(DevelopersRepository);
  const developers = await developersRepository.find();

  return response.json(developers);
});

developersRouter.post('/', async (request, response) => {
  try {
    const { name, sex, age, hobby, birthdate } = request.body;

    const parsedBirthDate = parseISO(birthdate);

    const createDeveloperService = new CreateDeveloperService();

    const developer = await createDeveloperService.execute({
      name,
      sex,
      age,
      hobby,
      birthdate: parsedBirthDate,
    });

    return response.json(developer);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default developersRouter;
