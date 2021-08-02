import { injectable, inject } from 'tsyringe';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';

import Developer from '@modules/developers/infra/typeorm/entities/Developer';

@injectable()
class FindByNameDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}

  public async execute(name: string): Promise<Developer[]> {
    const developers = await this.developersRepository.findByName(name);

    return developers;
  }
}

export default FindByNameDeveloperService;
