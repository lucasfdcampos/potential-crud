import Developer from '../models/Developer';

interface CreateDeveloperDTO {
  name: string;
  sex: string;
  age: number;
  hobby: string;
  birthdate: Date;
}

class DevelopersRepository {
  private developers: Developer[];

  constructor() {
    this.developers = [];
  }

  public all(): Developer[] {
    return this.developers;
  }

  public create({
    name,
    sex,
    age,
    hobby,
    birthdate,
  }: CreateDeveloperDTO): Developer {
    const developer = new Developer({ name, sex, age, hobby, birthdate });

    this.developers.push(developer);

    return developer;
  }
}

export default DevelopersRepository;
