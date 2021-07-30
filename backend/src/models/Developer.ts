import { v4 as uuidv4 } from 'uuid';

class Developer {
  id: string;

  name: string;

  sex: string;

  age: number;

  hobby: string;

  birthdate: Date;

  constructor({ name, sex, age, hobby, birthdate }: Omit<Developer, 'id'>) {
    this.id = uuidv4();
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.hobby = hobby;
    this.birthdate = birthdate;
  }
}

export default Developer;
