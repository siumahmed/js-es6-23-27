const ages = [12,11,14,13,16];
const age2 = [15,16,17];
const age3 = [25,55,43];
//const allAges = ages.concat(age2).concat(age3);
const allAges2 = [...ages,...age2,...age3]
console.log(allAges2);

const business = 650;
const minister = 444;
const pmMinister = 220;
const takaPoisa = [550 ,577,535,878];
//const maximum = Math.max(business,minister,pmMinister);
const maximum = Math.max(...takaPoisa)
console.log(maximum);

