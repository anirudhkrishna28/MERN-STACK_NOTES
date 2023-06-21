let user  = {
    name:'Anirudh',
    age:19,
    mailId:'anirudhkrishna.s2021csea@sece.ac.in',
    phoneno:8825447497,
    college:'sece'
}

let user1 = {...user};

user1.age  = 10;

console.log(user);
console.log(user1);