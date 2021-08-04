import { v4 as uuidv4 } from 'uuid';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';
import ICreateDeveloperDTO from '@modules/developers/dtos/ICreateDeveloperDTO';

import Developer from '@modules/developers/infra/typeorm/entities/Developer';

class FakeDevelopersRepository implements IDevelopersRepository {
  private developers: Developer[] = [];

  public async findById(id: string): Promise<Developer | undefined> {
    const findDeveloper = this.developers.find(
      developer => developer.id === id,
    );

    return findDeveloper;
  }

  public async findAll(): Promise<Developer[]> {
    return this.developers;
  }

  public async findByName(name: string): Promise<Developer[]> {
    const findDevelopers = this.developers.filter(
      developer => developer.name === name,
    );

    return findDevelopers;
  }

  public async create({
    name,
    sex,
    age,
    hobby,
    birthdate,
    avatar,
  }: ICreateDeveloperDTO): Promise<Developer> {
    const developer = new Developer();

    Object.assign(developer, {
      id: uuidv4(),
      name,
      sex,
      age,
      hobby,
      birthdate,
      avatar,
    });

    this.developers.push(developer);

    return developer;
  }

  public async save(developer: Developer): Promise<Developer> {
    const findIndex = this.developers.findIndex(
      findDeveloper => findDeveloper.id === developer.id,
    );

    this.developers[findIndex] = developer;

    return developer;
  }

  public async delete(id: string): Promise<number> {
    const findIndex = this.developers.findIndex(
      findDeveloper => findDeveloper.id === id,
    );

    this.developers.splice(findIndex, 1);

    return findIndex;
  }
}

export default FakeDevelopersRepository;
