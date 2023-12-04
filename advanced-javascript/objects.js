const student = [
    {id:21,nam:'rownak'},
    {id:11, nam:'depjol'},
    {id:12, nam:'samiul'},
    {id:222, nam:'basir'},
    {id:99, nam:'sakib'}
];
const names = student.map(s => s.nam);
const idS = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40)
const biggest = student.find(s => s.id > 40)
console.log(biggest);














//practise work done alhamdulillah
const students = [
    {id:21,nam:'rownok'},
    {id:11, nam:'rakibul'},
    {id:12, nam:'rana'},
    {id:222, nam:'rakib'}
];
const output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    output.push(element.nam);
}
 console.log(output);