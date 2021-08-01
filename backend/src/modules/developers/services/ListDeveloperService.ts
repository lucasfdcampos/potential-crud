import { injectable, inject } from 'tsyringe';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';

import Developer from '@modules/developers/infra/typeorm/entities/Developer';

@injectable()
class ListDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}

  public async execute(): Promise<Developer[]> {
    const developers = await this.developersRepository.findAll();

    return developers;
  }
}

export default ListDeveloperService;
