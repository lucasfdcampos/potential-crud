import { injectable, inject } from 'tsyringe';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';

import Developer from '@modules/developers/infra/typeorm/entities/Developer';

@injectable()
class ListDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developerRepository: IDevelopersRepository,
  ) {}

  public async execute(): Promise<Developer[]> {
    const clients = await this.developerRepository.findAll();

    return clients;
  }
}

export default ListDeveloperService;
