import { Person } from './person';
export class Student extends Person {

    constructor(name: string) {
        super(name);
    }

    public showAge(age: number): void {
        console.log('Studing...');
        super.showAge(25);
    }

}