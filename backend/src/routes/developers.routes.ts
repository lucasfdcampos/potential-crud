import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';
import multer from 'multer';

import uploadConfig from '../config/upload';

import DevelopersRepository from '../repositories/DevelopersRepository';
import CreateDeveloperService from '../services/CreateDeveloperService';
import UpdateDeveloperAvatarService from '../services/UpdateDeveloperAvatarService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const developersRouter = Router();

const upload = multer(uploadConfig);

developersRouter.use(ensureAuthenticated);

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

developersRouter.patch(
  '/avatar',
  upload.single('avatar'),
  async (request, response) => {
    const updateDeveloperAvatarService = new UpdateDeveloperAvatarService();

    const developer = await updateDeveloperAvatarService.execute({
      developer_id: request.query.id?.toString(),
      avatarFilename: request.file?.filename,
    });

    return response.json(developer);
  },
);

export default developersRouter;
