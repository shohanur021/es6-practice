const student = {name:"Sajib", age:20, marks:[78,82,90,91], about:{hobby:"travelling", favouriteNum:7}};
console.log(student.about);

const {name, marks} = student;
console.log(name,marks);


const info = ["Sajib","Samina",50,61,74,35];
const [first,second,...ages] = info;
console.log(first);
console.log(second);
console.log(ages);

