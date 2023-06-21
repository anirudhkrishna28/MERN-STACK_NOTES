let user  = {
    name:'Anirudh',
    age:19,
    mailId:'anirudhkrishna.s2021csea@sece.ac.in',
    phoneno:8825447497,
    college:'sece',
    address:{
        street:'siruvani nagar',
        city:'coimbatore'
    }
}

console.log(user.address.city);
console.log(user.city); // undefined
console.log(user?.add?.state); // optinal chaining
console.log(user.add.state); // error

