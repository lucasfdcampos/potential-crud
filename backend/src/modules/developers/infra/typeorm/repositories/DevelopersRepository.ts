import { getRepository, Repository } from 'typeorm';

import IDevelopersRepository from '@modules/developers/repositories/IDevelopersRepository';
import ICreateDeveloperDTO from '@modules/developers/dtos/ICreateDeveloperDTO';

import Developer from '@modules/developers/infra/typeorm/entities/Developer';

class DevelopersRepository implements IDevelopersRepository {
  private ormRepository: Repository<Developer>;

  constructor() {
    this.ormRepository = getRepository(Developer);
  }

  public async findById(id: string): Promise<Developer | undefined> {
    const developer = await this.ormRepository.findOne(id);

    return developer;
  }

  public async findAll(): Promise<Developer[]> {
    const findAll = await this.ormRepository.find();

    return findAll;
  }

  public async create({
    name,
    sex,
    age,
    hobby,
    birthdate,
  }: ICreateDeveloperDTO): Promise<Developer> {
    const developer = this.ormRepository.create({
      name,
      sex,
      age,
      hobby,
      birthdate,
    });

    await this.ormRepository.save(developer);

    return developer;
  }

  public async save(developer: Developer): Promise<Developer> {
    return this.ormRepository.save(developer);
  }

  public async delete(id: string): Promise<number> {
    let { affected } = await this.ormRepository.delete(id);

    if (!affected) {
      affected = 0;
    }

    return affected as number;
  }
}

export default DevelopersRepository;
