import { injectable, inject } from 'tsyringe';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';

import Developer from '@modules/developers/infra/typeorm/entities/Developer';

import AppError from '@shared/errors/AppError';

@injectable()
class FindDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}

  public async execute(id: string): Promise<Developer> {
    const developer = await this.developersRepository.findById(id);

    if (!developer) {
      throw new AppError('Developer not found.');
    }

    return developer;
  }
}

export default FindDeveloperService;
