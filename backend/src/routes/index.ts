import { Router } from 'express';

import developersRouter from './developers.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/developers', developersRouter);
routes.use('/users', usersRouter);

export default routes;
