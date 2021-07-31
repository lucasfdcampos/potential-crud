import Developer from '@modules/developers/infra/typeorm/entities/Developer';
import ICreateDeveloperDTO from '@modules/developers/dtos/ICreateDeveloperDTO';

export default interface IDevelopersRepository {
  findById(id: string): Promise<Developer | undefined>;
  findAll(): Promise<Developer[]>;
  create(data: ICreateDeveloperDTO): Promise<Developer>;
  save(developer: Developer): Promise<Developer>;
}
