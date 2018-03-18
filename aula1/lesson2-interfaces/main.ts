import { PersonDao } from './person-dao';
import { DaoInterface } from './dao-interface';
import { Person } from '../lessson1-classes/person';

let personDao: DaoInterface = new PersonDao();
let person: Person = new Person('Sandro');
person.showAge(20);
person.toString();
personDao.insert(person);


