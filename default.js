function add(num1,num2){
    num2 = num2 || 20;
    const result = num1+num2;

    return result;
}
const total = add(20);
console.log(total);



function add_2(num1,num2 = 20){
    const result = num1+num2;

    return result;
}
const value_1 = add_2(80);
console.log(value_1);




function add_3(num1,num2 = 20){
    const result = num1+num2;

    return result;
}

const value_2 = add_3(80,1);
console.log(value_2);