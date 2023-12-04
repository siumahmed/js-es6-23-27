class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'creative international school';
    }
}

const student1 = new Student(21,'siam ahmed');
const student2 = new Student(233,'Rana');
const student3 = new Student(993,'Ranar');
console.log(student1,student2,student3);