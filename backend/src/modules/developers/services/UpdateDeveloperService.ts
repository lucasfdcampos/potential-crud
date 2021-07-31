import { injectable, inject } from 'tsyringe';

import Developer from '@modules/developers/infra/typeorm/entities/Developer';
import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';

import AppError from '@shared/errors/AppError';

interface IRequest {
  id?: string;
  name: string;
  sex: string;
  age: number;
  hobby: string;
  birthdate: Date;
}

@injectable()
class UpdateDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}

  public async execute({
    id,
    name,
    sex,
    age,
    hobby,
    birthdate,
  }: IRequest): Promise<Developer> {
    if (!id) {
      throw new AppError('Invalid developer.');
    }

    const developer = await this.developersRepository.findById(id);

    if (!developer) {
      throw new AppError('Developer not found.');
    }

    developer.name = name;
    developer.sex = sex;
    developer.age = age;
    developer.hobby = hobby;
    developer.birthdate = birthdate;

    const developerUpdate = await this.developersRepository.save(developer);

    return developerUpdate;
  }
}

export default UpdateDeveloperService;
