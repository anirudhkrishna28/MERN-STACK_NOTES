function add(x,y){
    if(typeof x == typeof "s" || typeof y == typeof "s")
        {
            return 'invalid';
        }
    else
    return x+y;   
}

let a = add(10,20);
console.log(a);