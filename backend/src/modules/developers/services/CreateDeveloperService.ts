import { injectable, inject } from 'tsyringe';

import Developer from '@modules/developers/infra/typeorm/entities/Developer';
import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';

interface IRequest {
  name: string;
  sex: string;
  age: number;
  hobby: string;
  birthdate: Date;
}

@injectable()
class CreateDeveloperService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: IDevelopersRepository,
  ) {}

  public async execute({
    name,
    sex,
    age,
    hobby,
    birthdate,
  }: IRequest): Promise<Developer> {
    const developer = await this.developersRepository.create({
      name,
      sex,
      age,
      hobby,
      birthdate,
    });

    return developer;
  }
}

export default CreateDeveloperService;
