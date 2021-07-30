import { Router } from 'express';
import { parseISO } from 'date-fns';

import DevelopersRepository from '../repositories/DevelopersRepository';
import CreateDeveloperService from '../services/CreateDeveloperService';

const developersRouter = Router();
const developersRepository = new DevelopersRepository();

developersRouter.get('/', (request, response) => {
  const developers = developersRepository.all();

  return response.json(developers);
});

developersRouter.post('/', (request, response) => {
  try {
    const { name, sex, age, hobby, birthdate } = request.body;

    const parsedBirthDate = parseISO(birthdate);

    const createDeveloperService = new CreateDeveloperService(
      developersRepository,
    );

    const developer = createDeveloperService.execute({
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
