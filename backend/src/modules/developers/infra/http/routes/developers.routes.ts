import { Router } from 'express';
import multer from 'multer';

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

developersRouter.post('/', developersController.create);

developersRouter.patch(
  '/avatar',
  upload.single('avatar'),
  developerAvatarController.update,
);

export default developersRouter;
