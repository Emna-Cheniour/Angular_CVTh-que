export class Personne {
    id!: number;
    name!: string;
    firstname!: string;
    age!: number;
    cin!: string;
    job!: string;
    path!: string;

    constructor(id=0,name="",firstname="",age=0,cin="",job="",path=""){
        this.id=id;
        this.age=age;
        this.cin=cin;
        this.firstname=firstname;
        this.name=name;
        this.job=job;
        this.path=path;   
    }
}