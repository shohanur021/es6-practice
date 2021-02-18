const age = [45,68,30,65,40];
const age_2 = [15,20,15,18];
const age_3 = [21,25,27];
const allAges = age.concat(age_2).concat([6]).concat(age_3);
console.log(allAges);


const allAges_2 = [age,age_2,5,age_3];
console.log(allAges_2);

const allAges_3 = [...age,...age_2,5,...age_3];
console.log(allAges_3);



const business = 560;
const minister = 890;
const sochib = 500;
const maximum = Math.max(business,minister,sochib);
console.log(maximum);
const money = [400,500,600];
const maximum_2 = Math.max(money);
console.log(maximum_2);
const maximum_3 = Math.max(...money);
console.log(maximum_3);



