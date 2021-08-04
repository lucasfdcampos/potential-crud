import { container } from 'tsyringe';

import './providers';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';
import DevelopersRepository from '@modules/developers/infra/typeorm/repositories/DevelopersRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IDevelopersRepository>(
  'DevelopersRepository',
  DevelopersRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
