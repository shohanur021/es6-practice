class Parent{
    constructor(){
        this.fatherNmae = "Tera bap";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }

    getFullName(){
        return (`${this.name} Ahmed`);
    }
}

const baby = new Child("Ratul");
const baby_2 = new Child("Pakhi");

console.log(baby);
console.log(baby_2);
console.log(baby.getFullName());

