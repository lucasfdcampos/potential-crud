import { getCustomRepository } from 'typeorm';

import Developer from '../models/Developer';
import DevelopersRepository from '../repositories/DevelopersRepository';

interface IRequest {
  name: string;
  sex: string;
  age: number;
  hobby: string;
  birthdate: Date;
}

class CreateDeveloperService {
  public async execute({
    name,
    sex,
    age,
    hobby,
    birthdate,
  }: IRequest): Promise<Developer> {
    const developersRepository = getCustomRepository(DevelopersRepository);

    const developer = developersRepository.create({
      name,
      sex,
      age,
      hobby,
      birthdate,
    });

    await developersRepository.save(developer);

    return developer;
  }
}

export default CreateDeveloperService;
