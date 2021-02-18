class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name=sName;
        this.school="Korimunnesha School"
    }
}

const student_1 = new Student(12,"Sajib");
const student_2 = new Student(14,"Samina");
console.log(student_1,"\n",student_2);

console.log(student_1.name,student_2.name);
