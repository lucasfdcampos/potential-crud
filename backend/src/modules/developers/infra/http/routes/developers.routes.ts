import { Router } from 'express';
import multer from 'multer';
import { celebrate, Segments, Joi } from 'celebrate';

import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import DevelopersController from '@modules/developers/infra/http/controllers/DevelopersController';
import DeveloperAvatarController from '@modules/developers/infra/http/controllers/DeveloperAvatarController';

const developersRouter = Router();
const developersController = new DevelopersController();
const developerAvatarController = new DeveloperAvatarController();

const upload = multer(uploadConfig);

developersRouter.use(ensureAuthenticated);

developersRouter.get('/', developersController.index);

developersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      sex: Joi.string().required(),
      age: Joi.number().required(),
      hobby: Joi.string().required(),
      birthdate: Joi.date().raw().required(),
    },
  }),
  developersController.create,
);

developersRouter.put(
  '/',
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      sex: Joi.string().required(),
      age: Joi.number().required(),
      hobby: Joi.string().required(),
      birthdate: Joi.date().raw().required(),
    },
  }),
  developersController.update,
);

developersRouter.delete(
  '/',
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().uuid().required(),
    },
  }),
  developersController.delete,
);

developersRouter.patch(
  '/avatar',
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().uuid().required(),
    },
  }),
  upload.single('avatar'),
  developerAvatarController.update,
);

export default developersRouter;
