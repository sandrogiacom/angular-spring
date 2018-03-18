import { Person } from './../lessson1-classes/person';
import { Dao } from './dao';
import { DaoInterface } from './dao-interface';
let dao: DaoInterface<Person> = new Dao<Person>();
let person: Person = new Person('Sandro');
person.showAge(20);
person.toString();
dao.insert(person);


