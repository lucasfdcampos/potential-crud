import Developer from '../models/Developer';
import DevelopersRepository from '../repositories/DevelopersRepository';

interface RequestDTO {
  name: string;
  sex: string;
  age: number;
  hobby: string;
  birthdate: Date;
}

class CreateDeveloperService {
  private developersRepository: DevelopersRepository;

  constructor(developersRepository: DevelopersRepository) {
    this.developersRepository = developersRepository;
  }

  public execute({ name, sex, age, hobby, birthdate }: RequestDTO): Developer {
    const developer = this.developersRepository.create({
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
