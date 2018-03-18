import { Person } from './../lessson1-classes/person';
import { DaoInterface } from './dao-interface';
export class PersonDao implements DaoInterface {
   
    tableName: string;
    insert(object: any): boolean {
        throw new Error("Method not implemented.");
    }
    update(object: any): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    find(id: number) {
        throw new Error("Method not implemented.");
    }
    findAll(): [any] {
        throw new Error("Method not implemented.");
    }
}